const Discord = require("discord.js")

module.exports = {

    name: "cookieclicker",
    description: "🎲 Te donne le lien vers CookieClicker",
    permission: "Aucune",
    dm: true,
    category: "🎲 Jeux",
    

    async run(bot, message, args) {

        await message.reply(`\n**Le lien vers le fameux jeux CookieClicker !** \nhttps://orteil.dashnet.org/cookieclicker/`)
    }

}
