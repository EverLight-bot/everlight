const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "lock",
  description: "Блокирует канал от сообщений! (от роли @everyone, поэтому если роль выше - канал заблокирован не будет!!)",
  enabled: true,
  aliases: ["lk"],
  usage: " ",

  run: async (client, message, args) => {
    const em = client.em;
    const yessir = client.yessir;
    const config = client.config;
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("У вас нет права **MANAGE_CHANNELS**");
    let guild = message.guild.id;

    message.channel.overwritePermissions([
        {
           id: guild,
           deny: ['SEND_MESSAGES'],
        },
      ]);
      setTimeout(() => {
        message.delete().catch(console.err);
      }, 10000);
        const embed = new Discord.MessageEmbed()
       .setAuthor('Канал заблокирован.')
       .setColor(config.embedColor)
       .setTimestamp()
      message.channel.send(embed);


    
}
}

/*
exports.help = {
    name: "lock",
    description: "Блокирует канал от сообщений! (от роли @everyone, поэтому если роль выше - канал заблокирован не будет!!)",
    enabled: true,
    aliases: "-",
    usage: " "
}
*/