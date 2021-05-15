const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    const em = client.em;
    const yessir = client.yessir;
    const config = client.config;

    let guild = message.guild;
    const embed = new Discord.MessageEmbed()
    .setTitle(`Информация о сервере **__${guild.name}__**`)
    .setColor(config.embedColor)
    .setThumbnail(guild.iconURL())
    .addFields(
        { name: 'Кол-во участников', value: `${guild.memberCount}`, inline: true },
        { name: 'Кол-во каналов', value: `${guild.channels.cache.size}`, inline: true },
        // { name: 'Зарегистрирован в Discord', value: `${message.author.createdAt}`, inline: true },
        // { name: 'Зашел на этот сервер', value: `${guild.joinedAt}`, inline: true },
        { name: 'Регион сервера', value: `${guild.region}`, inline: true },
        { name: 'Создатель сервера', value: `${guild.owner}`, inline: true },
        { name: 'Сервер создан', value: `${guild.createdAt.toLocaleString()}`, inline: true },
    )
    .setTimestamp()
    .setFooter("Команду запросил - " + message.author.tag, `${message.author.displayAvatarURL()}`)
    message.channel.send(embed);
    
}
exports.help = {
    name: "server-info",
    description: "Показывает какую-то информацию о текущем сервере.",
    enabled: true,
    aliases: "-",
    usage: " "
}