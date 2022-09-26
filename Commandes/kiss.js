const Discord = require("discord.js");

module.exports = {

    name: "kiss",
    description: "🖼️ Affiche un Gif Bisous",
    permission: "Aucune",
    dm: true,
    category: "🖼️ Gif",


    async run(bot, message, args) {


        let kiss = [
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363785644552294/kiss_1.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363786131099779/kiss_2.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363786537930813/kiss_3.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363786936393728/kiss_4.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363787339059320/kiss_5.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363787842371615/kiss_6.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363788228239420/kiss_7.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363788626690158/kiss_8.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022971345937649714/kiss_9.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363896231571526/kiss_10.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363896688746556/kiss_11.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022972412725313586/kiss_12.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363897116557413/kiss_13.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363897712169010/kiss_14.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363898244833321/kiss_15.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363898697822208/kiss_16.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363899142414397/kiss_17.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363899738017852/kiss_18.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363942473781268/kiss_19.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363942901596283/kiss_20.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363943316820009/kiss_21.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363943685935165/kiss_22.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363944151494757/kiss_23.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363944508002444/kiss_24.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022973057603735562/kiss_25.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363945388814398/kiss_26.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363990305615873/kiss_27.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363990691500072/kiss_28.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363991161258004/kiss_29.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363991635218472/kiss_30.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363992113348708/kiss_31.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363992885108766/kiss_32.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363993338101840/kiss_33.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020363993887543396/kiss_34.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020364013944705126/kiss_35.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020364014682906684/kiss_36.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020364015211393074/kiss_37.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020364015697924216/kiss_38.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020368972920651827/kiss_39.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1020368973524639795/kiss_40.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022975126309970021/kiss_41.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022975126851026954/kiss_42.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022975127555690537/kiss_43.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022975128121901086/kiss_44.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022975128545542254/kiss_45.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022975152050425906/kiss_46.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022975152570515518/kiss_47.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022975152998330418/kiss_48.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022975153476476978/kiss_49.gif",
            "https://cdn.discordapp.com/attachments/1020363698595954708/1022975154172739664/kiss_50.gif", //50


        ];

        let kissradom = Math.floor(Math.random() * kiss.length);
        let motRandom = kiss[kissradom];

        let kiss1 = new Discord.EmbedBuilder()
            .setColor("Purple")
            .setImage(url = motRandom)
            .setTimestamp()



        await message.reply({ embeds: [kiss1] })
        console.log(motRandom)

    }

}

