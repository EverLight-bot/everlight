const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "bot-info",
    description: "Показывает какую-то информацию о боте.",
    enabled: true,
    aliases: ["binfo", "botinfo"],
    usage: " ",

    run : async (client, message, args) => {

    const em = client.em;
    const yessir = client.yessir;
    const config = client.config;


    const embed = new Discord.MessageEmbed()
    .setTitle(`Инфо о боте EverLight`)
    .addField("Серверов", client.guilds.cache.size, true)
    .addField("Пользователей", client.users.cache.size, true)
    .addField("Текстовые каналы", client.channels.cache.size, true)
    .addField("Когда создан бот", client.user.createdAt.toLocaleString(), true)
    .addField("ID бота", client.user.id, true)
    .addField("Тег бота", client.user.tag, true)
    .addField("Статус бота", client.user.presence['status'], true)
    .addField("Создатель бота", config.ownerTAG, true)
    .setThumbnail(client.user.avatarURL())
    .setColor(config.embedColor)
    .setFooter("Команду запросил - " + message.author.tag, `${message.author.displayAvatarURL()}`)
    .setTimestamp();
    message.channel.send(embed);
    
}
}

/*
exports.help = {
    name: "bot-info",
    description: "Показывает какую-то информацию о боте.",
    enabled: true,
    aliases: "-",
    usage: " "
}
*/