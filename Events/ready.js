const Discord = require("discord.js")
const loadDatabase = require("../Loaders/loadDatabase")
const loadSlashCommands = require("../Loaders/loadSlashCommands")
const { ActivityType } = require("discord.js")



module.exports = async bot => {

    bot.user.setStatus('Ready')
    setTimeout(async () => {
        const options = [
            "/help",
            "3.0",
            "/cookieclicker",
        ]
        let optionsradom = Math.floor(Math.random() * options.length);
        let motRandom = options[optionsradom];
        bot.user.setActivity(motRandom, { type: ActivityType.Watching })
        console.log("[STATUS] Les activités ont étais charger")
    }, 3000)




    bot.db = await loadDatabase()
    bot.db.connect(function () {
        console.log("Connected to database")
    })

    await loadSlashCommands(bot)




    console.log(`${bot.user.tag} est en ligne`)


}
