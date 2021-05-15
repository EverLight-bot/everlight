const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (message.channel.id === "834448335884517427") {
    const em = client.em;
    const yessir = client.yessir;
    const config = client.config;

    const channel = await message.guild.channels.create(`ticket-${message.author.username}`)

await channel.setParent('834430073057574922');
// console.log(channel.parentID);

    channel.updateOverwrite(message.guild.id, {'SEND_MESSAGES': false, 'VIEW_CHANNEL': false});
    channel.updateOverwrite(message.author, {'SEND_MESSAGES': true, 'VIEW_CHANNEL': true})

    const reactionMessage = await channel.send(new Discord.MessageEmbed()
        .setColor(config.embedColor)
        .setAuthor('Добро пожаловать в службу поддержки!')
        .setDescription(`Дорогой, <@${message.author.id}>\nСпасибо, что обратились в нашу службу поддержки! Мы свяжемся с вами как можно скорее!`)
    )
    try {
        await reactionMessage.react("🔒");
        await reactionMessage.react("⛔");
      } catch (err) {
        channel.send("Error sending emojis!");
        throw err;
      }
      const collector = reactionMessage.createReactionCollector(
        (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
        { dispose: true }
      );
  
      collector.on("collect", (reaction, user) => {
        switch (reaction.emoji.name) {
          case "🔒":
            channel.send('Канал заблокирован от сообщений.');
            channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
            break;
          case "⛔":
            channel.send('Этот канал удалится через 10 секунд...');
            setTimeout(() => channel.delete(), 10000);
            break;
        }
      });
    


    message.channel.send(`<@${message.author.id}>`, new Discord.MessageEmbed()
        .setColor(config.embedColor)
        .setAuthor('Канал для тех. поддержки создан')
        .setDescription(`Мы свяжемся с вами как можно скорее!\n <#${channel.id}>`)
    ).then((msg) => {
      setTimeout(() => msg.delete(), 7000);
      setTimeout(() => message.delete(), 3000);
    }).catch((err) => {
      throw err;
    });


  }
}
exports.help = {
    name: "ticket",
    description: "Эта команда чтобы создать канал для тех. поддержки. (на сервере поддержки бота)",
    enabled: true,
    aliases: "-",
    usage: ""
}