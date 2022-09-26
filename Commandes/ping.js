
const Discord = require("discord.js");

module.exports = {

    name: "ping",
    description: "📚 Affiche la latence de Cookies🍪",
    permission: "Aucune",
    dm: true,
    category: "📚 Information",

    async run(bot, message) {

        let Embed = new Discord.EmbedBuilder()
            .setColor("Blue")
            .setTitle(`Ping`)
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`Le ping du bot est de : \`${bot.ws.ping} ms\``)
            .setTimestamp()
            .setFooter({ text: "Ping" })


        await message.reply({ embeds: [Embed] })
    }


}