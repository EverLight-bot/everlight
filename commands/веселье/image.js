const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const img = require('images-scraper')

const google = new img({
    puppeteer : {
        headless : true,
    }
})


module.exports = {
    name : 'image',
    description: "Ищет картинки...",
    enabled: true,
    aliases: ["img", "картинки"],
    usage: "<что нужно найти>",

    run : async(client, message, args) => {
        const em = client.em;
        const yessir = client.yessir;
        const config = client.config;

        const query = args.join(" ")
        if(!query) return message.channel.send('Пожалуйста укажите что нужно найти.')

        const results = await google.scrape(query, 1)
        message.channel.send(results[0].url);

        // const embed = new Discord.MessageEmbed()
        //     .setColor(config.embedColor)
        //     .setImage(results[0].url)
        //     .setFooter(`Запрос: ${query}`)
        //     .setTimestamp()
        // message.channel.send(embed);

    }
}