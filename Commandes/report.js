const { TextInputStyle } = require('discord.js')
const Discord = require('discord.js')

module.exports = {

    name: 'report',
    description: "🔨 Permet d'envoyer un message au staff du serveur",
    category: "🔨 Modération",
    permission: 'Aucune',
    dm: false,

    async run(MxT, message, args) {

        let Modal = new Discord.ModalBuilder()
            .setCustomId('report')
            .setTitle('Signaler un membre')

        let question1 = new Discord.TextInputBuilder()
            .setCustomId('pseudo')
            .setLabel('Quel est son Pseudo/ID Discord ?')
            .setRequired(true)
            .setPlaceholder('Son pseudo/ID est ...')
            .setStyle(TextInputStyle.Short)

        let question2 = new Discord.TextInputBuilder()
            .setCustomId('problème')
            .setLabel("Qu'a-t-il fait ?")
            .setRequired(true)
            .setPlaceholder('Ecrire ici ...')
            .setStyle(TextInputStyle.Paragraph)

        let question3 = new Discord.TextInputBuilder()
            .setCustomId('autre')
            .setLabel("Combien de temps le problème perciste t-il ?")
            .setRequired(false)
            .setPlaceholder('Autre informations supplémentaire ?')
            .setStyle(TextInputStyle.Paragraph)

        let question4 = new Discord.TextInputBuilder()
            .setCustomId('lien')
            .setLabel("Avez-vous des rushs/screens de vos propos ?")
            .setRequired(false)
            .setPlaceholder('Lien non répertorié : YouTube, Lien Imgur : Screen')
            .setStyle(TextInputStyle.Short)

        let ActionRow1 = new Discord.ActionRowBuilder().addComponents(question1);
        let ActionRow2 = new Discord.ActionRowBuilder().addComponents(question2);
        let ActionRow3 = new Discord.ActionRowBuilder().addComponents(question3);
        let ActionRow4 = new Discord.ActionRowBuilder().addComponents(question4);

        Modal.addComponents(ActionRow1, ActionRow2, ActionRow3, ActionRow4)

        await message.showModal(Modal)

        try {

            let reponse = await message.awaitModalSubmit({ time: 300000 })

            let pseudo = reponse.fields.getTextInputValue('pseudo')
            let problème = reponse.fields.getTextInputValue('problème')
            let autre = reponse.fields.getTextInputValue('autre')
            let lien = reponse.fields.getTextInputValue('lien')

            await reponse.reply({ content: "Votre signalement à été envoyer avec succès !", ephemeral: true })

            let Embed = new Discord.EmbedBuilder()
                .setColor("Red")
                .setAuthor({ name: message.user.tag, iconURL: message.user.displayAvatarURL() })
                .setTitle('Un Membre à été signalé')
                .addFields(
                    { name: "Pseudo :", value: `\`\`\`${pseudo}\`\`\`` },
                    { name: "Problème :", value: `\`\`\`${problème}\`\`\``, inline: true },
                    { name: "Informations Supplémentaires :", value: `\`\`\`${autre}\`\`\``, inline: true },
                    { name: "Screens/Vidéos :", value: `\`\`\`${lien}\`\`\`` },
                )
                .setThumbnail(message.user.displayAvatarURL())
                .setTimestamp()
                .setFooter({ text: MxT.user.username, iconURL: MxT.user.displayAvatarURL() })

            await MxT.channels.cache.get("1018452815837941822").send({ embeds: [Embed] })

        } catch (err) { return; }
    }
}