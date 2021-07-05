const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "unlock",
  description: "Разблокирует канал для сообщений! (для роли @everyone)",
  enabled: true,
  aliases: ["unlk"],
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
           allow: ['SEND_MESSAGES'],
        },
      ]);
      setTimeout(() => {
        message.delete().catch(console.err);
      }, 10000);
        const embed = new Discord.MessageEmbed()
       .setAuthor('Канал разблокирован.')
       .setColor(config.embedColor)
       .setTimestamp()
      message.channel.send(embed);


    
}
}

/*
exports.help = {
    name: "unlock",
    description: "Разблокирует канал для сообщений! (для роли @everyone)",
    enabled: true,
    aliases: "-",
    usage: " "
}
*/