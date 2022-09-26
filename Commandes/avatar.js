const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "avatar",
    description: "🎉 Te permet d'avoir l'avatar de qui tu veux",
    permission: "Aucune",
    dm: true,
    category: "🎉 Fun",
    options: [
        {
            type: "user",
            name: "utlisateur",
            description: "l'utlisateur a avoir l'avatar",
            required: true,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {
        let user = args.getUser(`utlisateur`)
        if (!user) return message.reply("Utlisateur non valide")
        const exampleEmbed = new EmbedBuilder()
            .setColor("Green")
            .setTitle(`${user.username}`)
            .setDescription(`avatar de ${user.tag}`)
            .setTimestamp()
            .setFooter({ text: "avatar" })
            .setImage(user.displayAvatarURL({ size: 512 }))
            .setFooter({ text: `avatar de ${user.tag}`, iconURL: (user.displayAvatarURL({ dynamic: true })) });
        message.reply({ embeds: [exampleEmbed] });
    }

}