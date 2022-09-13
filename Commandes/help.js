const Discord = require("discord.js");

module.exports = {

    name: "help",
    description: "Avoir toutes les commandes du bot",
    permission: "Aucune",
    dm: true,
    category: "📚 Informations",
    options: [
        {
            type: "string",
            name: "commande",
            description: "La commande à afficher",
            required: false,
            autocomplete: true
        }
    ],

    async run(bot, message, args) {

       let command;
       if(args.getString("commande")) {
            command = bot.commands.get(args.getString("commande"));
            if(!command) return message.reply("Pas de commande !")
       }

       if(!command) {

            let categories = [];
            bot.commands.forEach(command => {
                if(!categories.includes(command.category)) categories.push(command.category)
            })

            let Embed = new Discord.EmbedBuilder()
            .setColor(bot.color)
            .setTitle(`Commandes du bot`)
            .setThumbnail(bot.user.displayAvatarURL({dynamic : true}))
            .setDescription(`Commandes disponibles : \`${bot.commands}\`\nCatégories disponibles : \`${categories.length}\``)
            .setTimestamp()

            await categories.sort().forEach(async cat =>{

                let command = bot.commands.filter(cmd => cmd.category === cat)
                Embed.addFields({name: `${cat}`, value: `${command.map(cmd => `\`${cmd.name}\` : ${cmd.description}`).join("\n")}`})
            })    
            
            await message.reply({embeds: [Embed]})
       } else{
        
        let Embed = new Discord.EmbedBuilder()
        .setColor(bot.color)
        .setTitle(`Commande ${command.name}`)
        .setThumbnail(bot.user.displayAvatarURL({dynamic : true}))
        .setDescription(`Nom : \`${command.name}\`\nDescription : \`${command.description}\`\nPermission requise : \`${typeof command.permission !== "bigint" ? command.permission : new Discord.PermissionsBitField(command.permission).toArray(false)}\`\nCommande en DM : \`${command.dm ? "Oui" : "Non"}\`\nCatégorie : \`${command.category}\``)
        .setTimestamp()

        await message.reply({embeds: [Embed]})
       }
    }
}