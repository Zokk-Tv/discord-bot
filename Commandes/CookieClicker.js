const Discord = require("discord.js")

module.exports = {

    name: "CookieClicker",
    description: "Te donne le lien du jeu CookieClicker",
    permission: "Aucune",
    dm: true,
    category: "🎲Jeux",
    

    async run(bot, message, args) {

        await message.reply(`CookieClicker: https://orteil.dashnet.org/cookieclicker/ `)
    }

}