const Discord = require("discord.js");

module.exports = {

    name: "help",
    description: "📚 Affiche la liste des commandes ou des informations sur une commande en particulier",
    permission: "Aucune",
    dm: true,
    category: "📚 Information",
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
        if (args.getString("commande")) {
            command = bot.commands.get(args.getString("commande"));
            if (!command) return message.reply("pas de commande")
        }

        if (!command) {

            let categories = [];
            bot.commands.forEach(command => {
                if (!categories.includes(command.category)) categories.push(command.category)
            })

            let Embed = new Discord.EmbedBuilder()
                .setColor("Blue")
                .setTitle(`Commandes du bot`)
                .setThumbnail()
                .setDescription(`\nCommands disponibles : \`${bot.commands.size}\`\nCatégories disponibles : \`${categories.length}\`\nPréfix de Cookies : \`/\` \n\nPour plus d'informations tu peux également utiliser \`/help <commande>\`.`)
                .setTimestamp()
                .setFooter({ text: "Commandes du bot" })

            await categories.sort().forEach(async cat => {

                let commands = bot.commands.filter(cmd => cmd.category === cat)
                Embed.addFields({ name: `${cat}`, value: `${commands.map(cmd => `\`${cmd.name}\``).join('⟡')}` })
            })

            await message.reply({ embeds: [Embed] })

        } else {

            let Embed = new Discord.EmbedBuilder()
                .setColor("Blue")
                .setTitle(`Commandes ${command.name}`)
                .setThumbnail()
                .setDescription(`Nom : \`${command.name}\`\nDescription : \`${command.description}\`\nPermission require : \`${typeof command.permission !== "bigint" ? command.permission : new Discord.PermissionsBitField(command.permission).toArray(false)}\`\nCommande en Dm : \`${command.dm ? "oui" : "non"}\`\nCatégories : \`${command.category}\``)
                .setTimestamp()
                .setFooter({ text: "Commandes du bot" })


            await message.reply({ embeds: [Embed] })


        }

    }

}