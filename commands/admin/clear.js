const { MessageActionRow, MessageButton, MessageEmbed} = require('discord.js');
const Discord = require('discord.js');


module.exports = {
  name: "clear",
  description: "delete the given number of messages",
  userPerms: ["MANAGE_MESSAGES"],
  botPerms: ["MANAGE_MESSAGES"],
  run: async (client, message, args) => {
   



    const fetched = message.channel || message.mentions.members.first();
    let messageArray = message.content.split(" ");
    const amount = parseInt(args[0]) + 1;

    const embed = new MessageEmbed()
    .setColor("#2F3136")
    .setDescription(`⚠️ᅠ${message.member.user} Использование \`h!clear 1-99\``)

    const embed1 = new MessageEmbed()
    .setTitle("Ошибка")
    .setColor("#2F3136")
    .setDescription(`⚠️ᅠВведите число от 1 до 100!`)

    const ema = new MessageEmbed()
    .setColor("#2F3136")
    .setDescription(`⚠️ᅠ${message.member.user} прости но у тебя нету прав :(`)

    if (!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES)) return message.channel.send({embeds: [ema]}).then(msg =>{message.delete({timeout: 2000})}) ;

    if (isNaN(amount)) {
      return message.channel.send({embeds: [embed]}).then(msg =>{message.delete({timeout: 2000})}) ; 
    } else if (amount <= 1 || amount > 100) {
      return message.channel.send({embeds: [embed1]}).then(msg =>{message.delete({timeout: 2000})}) ; 
    }

    fetched.bulkDelete(amount, true);
    fetched.bulkDelete(amount);
  },
};
