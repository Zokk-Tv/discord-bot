const Discord = require("discord.js")

module.exports = {

    name: "pong",
    description: "Affiche la latence",
    permission: "Aucune",
    dm: true,
    category: "📚 Informations",
    

    async run(bot, message, args) {

        await message.reply(`Ping : \`${bot.ws.ping}\``)
    }

}