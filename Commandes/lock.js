const Discord = require("discord.js")

module.exports = {

    name: "lock",
    description: "🔨 Verrouille un salon",
    permission: Discord.PermissionFlagsBits.ManageMessages,
    dm: false,
    category: "🔨 Modération",
    options: [
        {
            type: "channel",
            name: "salon",
            description: "Le channel a verrouiller",
            required: true,
            autocomplete: false
        }, {
            type: "string",
            name: "raison",
            description: "La raison du verrouiller",
            required: false,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {

        let channel = message.user ? message.guild.channels.cache.get(args._hoistedOptions[0].value) : (message.mentions.channels.first() || message.guild.channels.cache.get(args[0]))
        if (!channel) return message.reply("Aucun salon trouvé !")

        let reason = message.user ? args._hoistedOptions.length > 1 ? args._hoistedOptions[1].value : undefined : args.slice(1).join("");
        if (!reason) reason = "Aucune raison donnée";

        if (channel.permissionOverwrites.cache.get(message.guild.roles.everyone.id)?.deny.toArray(false).includes("SendMessages")) return message.reply("Ce salon est déjà verrouillé !")

        await channel.permissionOverwrites.edit(message.guild.roles.everyone.id, {
            SendMessages: false
        })

        await message.reply(`Le salon a été verrouillé avec succès ! \`${reason}\``)
        await channel.send(`Ce salon a été verrouillé par ${message.user ? message.user : message.author} ! \`${reason}\``)
    }
}