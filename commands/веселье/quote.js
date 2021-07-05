const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
let request = require('request');

module.exports = {
    name: "quote",
    description: "Ищет цитаты в интернете и отправляет в чат",
    cooldown: 5,
    aliases: ["цитата"],
    usage: " ",
    
    run: async (client, message, args) => {

    const em = client.em;
    const yessir = client.yessir;
    const config = client.config;

    let api = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json";

    request({
      method: 'GET',
      url: api
    }, function(err, response, text) {
      if (err) {
        return;
      }
      var json = JSON.parse(text);

      const embed = new Discord.MessageEmbed()
        .setColor(config.embedColor)
        .setThumbnail("https://img.icons8.com/metro/344/quote.png")
        .setDescription(json.quoteText)
        .setFooter(json.quoteAuthor)
        .setTimestamp()
      message.channel.send(embed);

    });
    
}
}