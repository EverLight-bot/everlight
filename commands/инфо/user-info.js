const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "user-info",
    description: "Показывает какую-то информацию о пользователе.",
    enabled: true,
    aliases: ["userinfo"],
    usage: " ",

    run: async (client, message, args) => {

        // message.mentions.users.first()

    const em = client.em;
    const yessir = client.yessir;
    const config = client.config;     

    let guild = message.guild;
    
    if (message.mentions.users.first()) {
        const embedMentioned = new Discord.MessageEmbed()
            .setAuthor(`Информация о пользователе ${message.mentions.users.first().tag}`)
            .setColor(config.embedColor)
            .setThumbnail(message.mentions.users.first().displayAvatarURL())
            .addFields({
                name: 'Зарегистрирован в Discord',
                value: `${message.mentions.users.first().createdAt.toLocaleString()}`
            }, {
                name: 'Зашел на этот сервер',
                value: `${guild.joinedAt.toLocaleString()}`
            }, {
                name: 'ID пользователя',
                value: `${message.mentions.users.first().id}`
            }, )
            .setTimestamp()
            .setFooter("Команду запросил - " + message.author.tag, `${message.author.displayAvatarURL()}`)
        message.channel.send(embedMentioned);
    }
    else {
        const embed = new Discord.MessageEmbed()
            .setAuthor(`Твоя информация ._.`)
            .setColor(config.embedColor)
            .setThumbnail(message.author.displayAvatarURL())
            .addFields({
                name: 'Зарегистрирован в Discord',
                value: `${message.author.createdAt.toLocaleString()}`
            }, {
                name: 'Зашел на этот сервер',
                value: `${guild.joinedAt.toLocaleString()}`
            }, {
                name: 'ID пользователя',
                value: `${message.author.id}`
            }, )
            .setTimestamp()
            .setFooter("Команду запросил - " + message.author.tag, `${message.author.displayAvatarURL()}`)
        message.channel.send(embed);
    }
    
}
}

/*
exports.help = {
    name: "user-info",
    description: "Показывает какую-то информацию о пользователе.",
    enabled: true,
    aliases: "-",
    usage: " "
}
*/