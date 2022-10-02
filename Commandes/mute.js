const Discord = require("discord.js")
const ms = require("ms")

module.exports = {

    name: "mute",
    description: "🔨 Permet de rendre muet un membre",
    permission: Discord.PermissionFlagsBits.ModerateMembers,
    dm: false,
    category: "🔨 Modération",
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre à rendre muet",
            required: true,
            autocomplete: false

        }, {
            type: "string",
            name: "temps",
            description: "Le temps de la restriction",
            required: true,
            autocomplete: false
        }, {
            type: "string",
            name: "raison",
            description: "La raison de la restriction",
            required: false,
            autocomplete: false
        }
    ],
    async run(bot, message, args) {


        let user = args.getUser("membre");
        if (!user) return message.reply("Pas de membre à rendre muet")
        let member = message.guild.members.cache.get(user.id)
        if (!member) return message.reply("Pas de membre")

        let time = args.getString("temps")
        if (!time) return message.reply("Pas de temps")
        if (isNaN(ms(time))) return message.reply("pas le bon format")
        if (ms(time) > 2419200000) return message.reply("La restriction ne peut pas durer plus de 28 jours")

        let reason = args.getString("raison")
        if (!reason) reason = "pas de raison fournie";

        if (message.user.id === user.id) return message.reply("Essaie pas de te rendre muet")
        if ((await message.guild.fetchOwner()).id === user.id) return message.reply("Ne rend pas muet du propriétaire du serveur")
        if (!member.moderatable) return message.reply("Je ne peux pas rendre muet ce membre ")
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply("Tu ne peux pas rendre muet cette personne")
        if (member.isCommunicationDisabled()) return message.reply("ce membre est déja muet")

        try { await user.send(`Tu as été rendu muet sur le serveur ${message.guild.name} par ${message.user.tag} pendant ${time} pour la raison : \`${reason}\``) } catch (err) { }

        await message.reply(`${message.user} a rendu muet ${user.tag} pendant ${time} pour la raison : \`${reason}\``)

        await member.timeout(ms(time), reason)

    }
}
