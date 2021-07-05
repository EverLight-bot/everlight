const weather = require('weather-js');
const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "weather",
    description: "Показывает погоду в любом городе.",
    enabled: true,
    aliases: ["wthr", "погода", "pogoda"],
    usage: "<город>",

    run: async (client, message, args) => {
    
    const em = client.em;
    const yessir = client.yessir;
    const config = client.config;

    weather.find({search: args.join(" "), degreeType: 'C', lang: 'ru'}, function (error, result){
        if(!args[0]) return message.reply('Вы не указали местонахождение!')

        if(result === undefined || result.length === 0) return message.channel.send('**Недействительное** местоположение');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Прогноз погоды в ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(config.embedColor)
        .addField('Часовой пояс', `UTC${location.timezone}`, true)
        .addField('Тип градусов', 'по шкале Цельсия\n(Celsius)', true)
        .addField('Температура', `${current.temperature}°`, true)
        .addField('Ветер', current.winddisplay, true)
        .addField('Чуствуется как', `${current.feelslike}°`, true)
        .addField('Влажность', `${current.humidity}%`, true)
        .setFooter(`Команду запросил - ${message.author.tag}`, message.author.displayAvatarURL())
        .setTimestamp()
        message.channel.send(weatherinfo)
        })

}
}

/*
exports.help = {
    name: "weather",
    description: "Показывает погоду в любом городе.",
    enabled: true,
    aliases: "-",
    usage: "<город>"
}
*/