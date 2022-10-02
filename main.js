const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({ intents })
const config = require("./config")
const loadCommands = require("./Loaders/loadCommands")
const loadEvents = require("./Loaders/loadEvents")


bot.login(process.env.TOKEN);



bot.commands = new Discord.Collection()
bot.color = "#ff0000"
bot.fonction = {
  createId: require("./Fonctions/createId")
}


bot.login(config.TOKEN)
loadCommands(bot)
loadEvents(bot)





