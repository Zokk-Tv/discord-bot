const discord = require("discord.js")

module.exports = {
    name: "say",
    description: "👑 Permet d'envoyer un message à travers Cookies🍪",
    permission: discord.PermissionFlagsBits.Administrator,
    dm: false,
    category: "👑 Administration",
    options: [
        {
            type: "string",
            name: "tosend",
            description: "Le message a ecrire",
            required: true,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {

        const msg = args.getString("tosend");
        message.channel.send(msg);
        await message.reply({ content: ':white_check_mark: **message envoyer avec succes ! **:white_check_mark:', ephemeral: true })

    }
}