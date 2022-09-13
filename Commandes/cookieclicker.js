const Discord = require("discord.js")

module.exports = {

    name: "pong",
    description: "Te donne le lien vers CookieClicker",
    permission: "Aucune",
    dm: true,
    category: "🎲 Jeux",
    

    async run(bot, message, args) {

        await message.reply(`Ping : \`${bot.ws.ping}\``)
    }

}