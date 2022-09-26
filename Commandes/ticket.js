const Discord = require("discord.js")
const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder } = require("discord.js")

module.exports = {

    name: "ticket",
    description: "👑 Permet d'envoyer l'embed des tickets",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: false,
    category: "👑 Administration",

    async run(bot, message, args) {
        const EmbedTicket = new EmbedBuilder()
            .setColor("#3dffcc")
            .setDescription(`✅ L'embed des tickets à été envoyer avec succès !`)

        const EmbedTicket1 = new EmbedBuilder()
            .setColor("#3dffcc")
            .setTitle(`Comment créer un ticket ?`)
            .setDescription(`Pour créer un ticket, il vous suffit juste de cliquer sur le menu déroulant ci-dessous et de sélectionner la catégorie qui convient le mieux à votre demande d'aide !\n- Pas de mentions sauf si vous n'avez pas reçu de réponse sous 24h.\n- Pas de spam.\n- Ne pas créer de ticket pour des trucs qui ne servent a rien.`)
            .setTimestamp()
            .setFooter({ text: `${bot.user.username}`, iconURL: bot.user.displayAvatarURL({ dynamic: true }) });

        const RowTicket = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId('menuticket')
                    .setPlaceholder('Sélectionner le type de ticket que vous voulez !')
                    .addOptions(
                        {
                            label: `Questions`,
                            description: `Ouvrir un ticket pour obtenir de l'aide`,
                            emoji: `📩`,
                            value: `Questions`,
                        },
                        {
                            label: `Recrutement`,
                            description: `Ouvrir un ticket pour obtenir de l'aide`,
                            emoji: `📩`,
                            value: `Recrutement`,
                        },{
                            label: `Partenariat`,
                            description: `Ouvrir un ticket pour obtenir de l'aide`,
                            emoji: `📩`,
                            value: `pub`,
                        },
                    ),
            );

        await message.reply({ embeds: [EmbedTicket], ephemeral: true })
        await message.channel.send({ embeds: [EmbedTicket1], components: [RowTicket] })
    }
}
