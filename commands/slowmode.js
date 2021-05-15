const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    const em = client.em;
    const yessir = client.yessir;
    const config = client.config;
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("У вас нет права **MANAGE_CHANNELS**");

    if(args[0] != null){
        message.channel.setRateLimitPerUser(args[0] , `${message.author.tag} использовал команду ${config.prefix}slowmode ${args[0]}`);
        setTimeout(() => { message.delete(); }, 5000);

        const embed = new Discord.MessageEmbed()
        .setTitle('Медленный режим применен на ' + args[0] + ' сек.')
        .setColor(config.embedColor)
        .setTimestamp()
       message.channel.send(embed);
    }

}
exports.help = {
    name: "slowmode",
    description: "Устанавливает медленный режим.",
    enabled: true,
    aliases: "-",
    usage: "<время в секундах>"
}