const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js")

module.exports = (client, member) => {

    // ---------------------------------------------- MESSAGE D'ARRIVER ------------------------------------------------------------------------------------------------

    const EmbedMessage = new EmbedBuilder()
        .setTitle(`3.0`)
        .setColor('#0C15CF')
        .setDescription(`Le membre : <@${member.user.id}>.\n \u200B \nViens de rejoindre la Team.`)
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp()

    client.channels.cache.get('1009594837659561985').send({ embeds: [EmbedMessage] })
}