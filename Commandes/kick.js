const Discord = require("discord.js");

module.exports = {

  name: "kick",
  description: "🔨 Expulse un membre du serveur",
  permission: Discord.PermissionFlagsBits.BanMembers,
  category: "🔨 Modération",
  dm: false,
  options: [
    {
      type: "user",
      name: "membre",
      description: "Le membre à expulser",
      required: true,
      autocomplete: false
    }, {
      type: "string",
      name: "raison",
      description: "La raison de l'expultion",
      required: false,
      autocomplete: false
    }
  ],
  async run(bot, message, args) {


    let user = args.getUser("membre")
    if (!user) return message.reply("Pas de membre à expulser")
    let member = message.guild.members.cache.get(user.id)
    if (!member) return message.reply("Pas de membre à expulser")

    let reason = args.get("raison").value;
    if (!reason) reason = "pas de raison fournie";

    if (message.user.id === user.id) return message.reply("Essaie pas de t'expulser")
    if ((await message.guild.fetchOwner()).id === user.id) return message.reply("N'expulse pas le propriétaire du serveur")
    if (member && !member.bannable) return message.reply("Je ne peux pas expulser ce membre ")
    if (member && message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply("Tu ne peux pas expulser cette personne")


    try { await user.send(`Tu as été expulser du serveur ${message.guild.name} par ${message.user.tag} pour la raison : \`${reason}\``) } catch (err) { }

    await message.reply(`${message.user} a expulser ${user.tag} pour la raison : \`${reason}\``)

    await member.kick(reason)





  }
}