const Discord = require("discord.js")

module.exports = {

    name: "warn",
    description: "🔨 Permet d'avertir un membre du serveur avec une raion",
    permission: Discord.PermissionFlagsBits.ManageMessages,
    dm: false,
    category: "🔨 Modération",
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre a avertir",
            required: true,
            autocomplete: false

        }, {
            type: "string",
            name: "raison",
            description: "La raison de l'avertissement",
            required: true,
            autocomplete: false

        }
    ],

    async run(bot, message, args, db) {

        let user = args.getUser("membre")
        if (!user) return message.reply("Le membre n'a pas été trouvé !")
        let member = message.guild.members.cache.get(user.id)
        if (!member) return message.reply("Le membre n'a pas été trouvé !")

        let reason = args.getString("raison")
        if (!reason) reason = "Veuillez noter la raison de l'avertissement.";

        if (message.user.id === user.id) return message.reply("Tu ne peux pas t'avertir toi-même !")
        if ((await message.guild.fetchOwner()).id === user.id) return message.reply("Tu ne peux pas de avertir le propriétaire du serveur !")
        if (member && message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply("Tu ne peux pas avertir ce membre !")
        if ((await message.guild.members.fetchMe()).roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply("Tu ne peux pas avertir ce membre !")

        try {
            let Embed1 = new Discord.EmbedBuilder()
                .setColor("Blue")
                .setTitle(`Commandes du bot`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`${message.user.tag} vous a averti sur le serveur ${message.guild.name} pour la raison suivante : \`${reason}\` !`)
                .setTimestamp()
                .setFooter({ text: "warn" })
            await user.send({ embeds: [Embed1] })
        } catch (err) { }

        let Embed = new Discord.EmbedBuilder()
            .setColor("Blue")
            .setTitle(`Commandes du bot`)
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`\`🛑 Avertissement \n\` ${message.user} **a averti** \n\`${user.tag}\` **avec succès ! ✅**\n \` pour la raison\`: \`${reason}\` !`)
            .setTimestamp()
            .setFooter({ text: "warn" })


        await message.reply({ embeds: [Embed] })


        let ID = await bot.fonction.createId("WARN")

        db.query(`INSERT INTO warns (guild, user, author, warn, reason, date) VALUES ('${message.guild.id}', '${user.id}', '${message.user.id}', '${ID}', '${reason.replace(/'/g, "\\'")}', '${Date.now()}')`)
    }
}