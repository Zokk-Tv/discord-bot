const Discord = require("discord.js")
const ms = require('ms')
const { EmbedBuilder } = require("discord.js")
const { color } = require('../config')
 
module.exports = {
 
  name: "clear",
  description: "Effacer des messages",
  permission: Discord.PermissionFlagsBits.ManageMessages,
  dm: false,
  category: "🔨 Modération",
  options: [
    {
      type: "number",
      name: "nombre",
      description: "Le nombre de messages à effacer",
      required: true,
      autocomplete: false
    },
    {
      type: "channel",
      name: "salon",
      description: "Le salon où effecer les messages",
      required: false,
      autocomplete: false
    }
  ],
 
  async run(bot, message, args) {
 
    const EmbedClear = new EmbedBuilder()
    .setColor(bot.color)
    .setDescription("❌ Aucun salon trouvé !")
    const EmbedClear1 = new EmbedBuilder()
    .setColor(bot.color)
    .setDescription("❌ Veuillez indiquer un nombre entre `0` et `100` !")
 
    let channel = args.getChannel("salon")
    if(!channel) channel = message.channel;
    if(channel.id !== message.channel.id && !message.guild.channels.cache.get(channel.id)) return message.reply({embeds: [EmbedClear], ephemeral: true})
 
    let number = args.getNumber("nombre")
    if(parseInt(number) <= 0 || parseInt(number) > 100) return message.reply({embeds: [EmbedClear1], ephemeral: true})
 
    await message.deferReply({ ephemeral: true })
 
    try {
      let messages = await channel.bulkDelete(parseInt(number))
 
      const EmbedClear2 = new EmbedBuilder()
      .setColor(bot.color)
      .setDescription(`✅ Tu as supprimé \`${messages.size}\` message(s) dans le salon ${channel} !`)
 
      await message.followUp({embeds: [EmbedClear2], ephemeral: true})
    } catch (err) {
 
      let messages = [...(await channel.messages.fetch()).filter(msg => !msg.interaction && (Date.now() - msg.createAt) <= 120960000).values()]
 
      const EmbedClear3 = new EmbedBuilder()
      .setColor(bot.color)
      .setDescription(`❌ Tu ne peux pas supprimer les messages car ils datent tous de plus de 14 jours !`)
 
      if(messages.length <= 0) return message.followUp({embeds: [EmbedClear3], ephemeral: true})
      await channel.bulkDelete(messages)
 
      const EmbedClear4 = new EmbedBuilder()
      .setColor(bot.color)
      .setDescription(`✅ Tu as pu supprimé uniquement \`${messages.length}\` message(s) dans le salon ${channel} car les autres dataient de plus de 14 jours !`)
 
      await message.followUp({embeds: [EmbedClear4], ephemeral: true})
    }
  }
}