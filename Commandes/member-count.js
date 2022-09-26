const Discord = require("discord.js")
const { EmbedBuilder } = require("discord.js")
const { color } = require('../config')

module.exports = {

    name: "membres",
    description: "📚 Affiche le nombre de membres du serveur",
    permission: "Aucune",
    dm: false,
    category: "📚 Information",

    async run(bot, message, args) {

        const EmbedMemberCount = new EmbedBuilder()
            .setColor("Blue")
            .addFields({ name: "Membres totaux :", value: `👥 ${message.guild.memberCount}`, inline: false })
            .addFields({ name: "Humain :", value: `👤 ${message.guild.members.cache.filter(member => !member.user.bot).size}`, inline: true })
            .addFields({ name: "Bot :", value: `🤖 ${message.guild.members.cache.filter(member => member.user.bot).size}`, inline: true })

        await message.reply({ embeds: [EmbedMemberCount] })
    }
}