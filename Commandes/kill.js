
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
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022968518003675166/kill_1.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022968518376951828/kill_2.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022968518758645760/kill_3.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022968519077396540/kill_4.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022968519505219634/kill_5.gif", //5
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022970104612388954/kill_6.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022970105195401238/kill_7.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022970105640001597/kill_8.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022970106248187904/kill_9.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022970107032514580/kill_10.gif", //10

        ];

        let killradom = Math.floor(Math.random() * kill.length);
        let motRandom = kill[killradom];

        let Embed = new Discord.EmbedBuilder()
            .setColor("Purple")
            .setImage(url = motRandom)
            .setTimestamp()



        await message.reply({ embeds: [Embed] })
        console.log(motRandom)
    }


}