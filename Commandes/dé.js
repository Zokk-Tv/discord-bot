const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "dé",
    description: "🎲 Choisis un nombre entre 1 et 6 aléatoirement",
    permission: "Aucune",
    dm: true,
    category: "🎲 Jeux",

    async run(bot, message, args) {


        let min = 1;
        let max = 6;
        let random = Math.floor(Math.random() * (max - min)) + min;

        const dé = new EmbedBuilder()
            .setTitle(`dé aléatoire`)
            .setColor("Green")
            .setDescription(`tu as obtenue le chiffre  \`${random}\``)
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setFooter({ text: "dé" })
        await message.reply({ embeds: [dé] })
    }

}