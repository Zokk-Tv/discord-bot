const Discord = require("discord.js")
const ms = require("ms")

module.exports = {

    name: "unmute",
    description: "🔨 Permet de rendre la parole à un membre muet",
    permission: Discord.PermissionFlagsBits.ModerateMembers,
    dm: false,
    category: "🔨 Modération",
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre à rendre la parole",
            required: true,
            autocomplete: false
        }, {
            type: "string",
            name: "raison",
            description: "La raison ",
            required: false,
            autocomplete: false
        }
    ],
    async run(bot, message, args) {


        let user = args.getUser("membre");
        if (!user) return message.reply("Pas de membre à rendre la parole")
        let member = message.guild.members.cache.get(user.id)
        if (!member) return message.reply("Pas de membre")


        let reason = args.getString("raison")
        if (!reason) reason = "pas de raison fournie";


        if (!member.moderatable) return message.reply("Je ne peux pas rendre la parole à ce membre ")
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply("Tu ne peux pas rendre la parole à cette personne")
        if (!member.isCommunicationDisabled()) return message.reply("ce membre n'est pas muet")

        try { await user.send(`Tu n'es plus muet sur le serveur ${message.guild.name} grâce à ${message.user.tag}  pour la raison : \`${reason}\``) } catch (err) { }

        await message.reply(`${message.user} a rendu la parole ${user.tag} pour la raison : \`${reason}\``)

        await member.timeout(null, reason)

    }
}
