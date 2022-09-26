const { EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")

module.exports = {

    name: "8ball",
    description: "🎉 Pose ta question à la boule, elle y répondra du mieux qu'elle peut",
    permission: "Aucune",
    dm: true,
    category: "🎉 Fun",

    options: [
        {
            type: "string",
            name: "question",
            description: "La question à poser",
            required: true,
            autocomplete: false
        }
    ],

    async run(bot, interaction, args) {

        let quest = args.getString("question")
        let result = ["Oui", "Non", "Peut-être"][Math.floor(Math.random() * ["Oui", "Non", "Peut-être"].length)];

        const ballEmbed = new EmbedBuilder()
            .setTitle(`8ball`)
            .setColor("Green")
            .addFields(
                { name: 'Question', value: `${quest}`, inline: false },
                { name: 'Reponse', value: `${result}`, inline: false },
            )
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setFooter({ text: "8ball" })


        interaction.reply({ embeds: [ballEmbed] })


    }
}