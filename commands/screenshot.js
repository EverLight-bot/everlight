const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
    const em = client.em;
    const yessir = client.yessir;
    const config = client.config;

    if (!args[0]) return message.reply(':x: Введите адрес сайта!');
    
        const embedScreenshot = new Discord.MessageEmbed()
        .setTitle(`Скриншот сайта ${args[0]}`)
        .setColor(config.embedColor)
        .setImage(`https://shot.screenshotapi.net/screenshot?&url=${args[0]}&width=1280&height=720&output=image&file_type=png`)
        .setFooter("Команду запросил - " + message.author.tag, `${message.author.displayAvatarURL()}`)
        .setTimestamp();
        message.channel.send(embedScreenshot);
}
module.exports.help = {
    name: "screenshot",
    description: "Делает скриншот какого-то сайта. (Иногда может не получится сделать скриншот)",
    enabled: true,
    aliases: "-",
    usage: "<адрес_сайта>"
}