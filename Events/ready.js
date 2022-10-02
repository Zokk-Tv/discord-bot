const Discord = require("discord.js")
const loadDatabase = require("../Loaders/loadDatabase")
const loadSlashCommands = require("../Loaders/loadSlashCommands")
const { ActivityType } = require("discord.js")



module.exports = async bot => {


    // ---------------------------------------------- STATUT -----------------------------------------------------------------------------------------------------------

    bot.user.setStatus('Ready')
    setTimeout(async () => {
        const options = [
            "3.0",
            "/help",
            "/cookieclicker",
        ]
        let optionsradom = Math.floor(Math.random() * options.length);
        let motRandom = options[optionsradom];
        bot.user.setActivity(motRandom, { type: ActivityType.Watching })
        console.log("[STATUS] Les activités ont été charger")
    }, 3000)


    // ---------------------------------------------- BASE DE DONNEES --------------------------------------------------------------------------------------------------

    bot.db = await loadDatabase()
    bot.db.connect(function () {
        console.log("Connecter à la database")
    })

    await loadSlashCommands(bot)



    // ---------------------------------------------- LANCEMENT DU BOT -------------------------------------------------------------------------------------------------
    
    console.log(`${bot.user.tag} est en ligne`)


}
