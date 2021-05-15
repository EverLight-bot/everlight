const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    const em = client.em;
    const yessir = client.yessir;
    const config = client.config;     

    let guild = message.guild;
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Информация о пользователе ${message.author.tag}`)
    .setColor(config.embedColor)
    .setThumbnail(message.author.displayAvatarURL())
    .addFields(
        { name: 'Зарегистрирован в Discord', value: `${message.author.createdAt.toLocaleString()}` },
        { name: 'Зашел на этот сервер', value: `${guild.joinedAt.toLocaleString()}` },
        { name: 'ID пользователя', value: `${message.author.id}` },
    )
    .setTimestamp()
    .setFooter("Команду запросил - " + message.author.tag, `${message.author.displayAvatarURL()}`)
    message.channel.send(embed);
    
}
exports.help = {
    name: "user-info",
    description: "Показывает какую-то информацию о пользователе.",
    enabled: true,
    aliases: "-",
    usage: " "
}