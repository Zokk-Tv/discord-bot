const Discord = require("discord.js")

module.exports = {

    name: "cookieclicker",
    description: "Permet de te donner le lien du jeu",
    permission: "Aucune",
    dm: true,
    category: "🎲 Jeux",
    

    async run(bot, message, args) {

        await message.reply(`Et voilà toc : https://orteil.dashnet.org/cookieclicker`)
    }

}