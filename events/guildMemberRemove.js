const client = require("../index.js");
const { MessageEmbed } = require('discord.js');

client.on('guildMemberRemove', async(member) => {
  const Channel = member.guild.channels.cache.get('АЙДИ КАНАЛА')
  const embed = new MessageEmbed()
  .setColor("#2F3136")
  .setImage(`${member.user.displayAvatarURL({dynamic: true, size: 512})}`)
  .setDescription(`**${member.user}** покинул наш сервер:(  \n Кол-во людей: ${member.guild.memberCount} `)
  Channel.send({ embeds: [embed] })
})