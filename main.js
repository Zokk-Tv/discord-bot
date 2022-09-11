const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./Loaders/loadCommands")
const loadEvents = require("./Loaders/loadEvents")


bot.commands = new Discord.Collection()
bot.color = "#f0f0f0";


loadCommands(bot)
loadEvents(bot)

bot.login(process.env.TOKEN);
