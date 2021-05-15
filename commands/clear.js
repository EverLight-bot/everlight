const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    const em = client.em;
    const yessir = client.yessir;
    const config = client.config;

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("У вас нет права **MANAGE_MESSAGES**");
    
    if (!args[0]) return message.reply("Введите количество сообщений, которые нужно удалить!");

    if (isNaN(args[0])) return message.reply("Пожалуйста, введите реальную цифру!");

    if (args[0] > 100) return message.reply("Вы не можете удалить более 100 сообщений!");

    if (args[0] < 1) return message.reply("Вы должны удалить хотя бы одно сообщение!");

    await message.channel.messages.fetch({limit: args[0]}).then(messages => {
        message.channel.bulkDelete(messages)
        const embed = new Discord.MessageEmbed()
            .setAuthor(`Удалено ${args[0]} сообщений`)
            .setColor(config.embedColor)
            .setTimestamp()
        message.channel.send(embed);
    });

}
exports.help = {
    name: "clear",
    description: "Очищает сообщения.",
    enabled: true,
    aliases: "-",
    usage: "<кол-во сообщений>"
}