const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js")

module.exports = (client, member) => {

    const EmbedMessage = new EmbedBuilder()
        .setTitle(`3.0`)
        .setColor('#0C15CF')
        .setDescription(`Le membre : <@${member.user.id}>.\n \u200B \nViens de rejoindre la Team.`)
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp()

    client.channels.cache.get('').send({ embeds: [EmbedMessage] })
}
