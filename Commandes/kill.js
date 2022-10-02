
const { userMention } = require("discord.js");
const Discord = require("discord.js");

module.exports = {

    name: "kill",
    description: "🖼️ Affiche un Gif qui tue",
    permission: "Aucune",
    dm: true,
    category: "🖼️ Gif",

    async run(bot, message, args) {

        let kill = [
            "https://cdn.discordapp.com/attachments/876819454330302474/1026114779087114290/kill1.gif",
            "https://cdn.discordapp.com/attachments/876819454330302474/1026114775400333372/kill2.gif",
            "https://cdn.discordapp.com/attachments/876819454330302474/1026120566064816238/kill3.gif",
            "https://cdn.discordapp.com/attachments/876819454330302474/1026120566610067456/kill4.gif",
            "https://cdn.discordapp.com/attachments/876819454330302474/1026120587325751306/kill5.gif", //5
            "https://cdn.discordapp.com/attachments/876819454330302474/1026116966177591337/kill6.gif",
            "https://cdn.discordapp.com/attachments/876819454330302474/1026116299866251364/kill7.gif",
            "https://cdn.discordapp.com/attachments/876819454330302474/1026116299463610368/kill8.gif",
            "https://cdn.discordapp.com/attachments/876819454330302474/1026120372631916604/kill9.gif",
            "https://cdn.discordapp.com/attachments/876819454330302474/1026114778541871176/kill10.gif", //10
            "https://cdn.discordapp.com/attachments/876819454330302474/1026114754000978037/kill11.gif",
            "https://cdn.discordapp.com/attachments/876819454330302474/1026114754403647529/kill12.gif",
            "https://cdn.discordapp.com/attachments/876819454330302474/1026114754730791012/kill13.gif",
            "https://cdn.discordapp.com/attachments/876819454330302474/1026114755074727967/kill14.gif",
            "https://cdn.discordapp.com/attachments/876819454330302474/1026114753174712340/kill15.gif", //15

        ];

        let killradom = Math.floor(Math.random() * kill.length);
        let motRandom = kill[killradom];

        let kill1 = new Discord.EmbedBuilder()
            .setColor("#c45afd")
            .setImage(url = motRandom)
            .setTimestamp()



        await message.reply({ embeds: [kill1]})
        console.log(motRandom)
    }


}