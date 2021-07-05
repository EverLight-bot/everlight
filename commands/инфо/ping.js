const Discord = require("discord.js");
const ms = require('ms');

module.exports = {
    name: "ping",
    description: "Отображает задержку бота.",
    enabled: true,
    aliases: "ping",
    usage: " ",
    run : async(client, message, args) => {

    var timeNow = Date.now();
    var m = await message.channel.send(':ping_pong: Загрузка...');
    var messageLat = Date.now()-timeNow;
    var ping = ms(client.uptime);
    const config = client.config;

    let embed = new Discord.MessageEmbed()
    .addField("Server <- Discord", `${Math.round(client.ws.ping)}ms`)
    .addField("Server -> Discord", `${messageLat}ms`)
    .addField("Время безотказной работы", ping)
    .setTimestamp()
    .setColor(config.embedColor);
    m.edit({
        content: '',
        embed
    });
}
}

/*
module.exports.help = {
    name: "ping",
    description: "Отображает задержку бота.",
    enabled: true,
    aliases: "-",
    usage: " "
}
*/