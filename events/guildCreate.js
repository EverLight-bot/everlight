const { Discord } = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = async (client, message) => {
    const config = client.config;
    let channel = await client.channels.fetch('834531295160827914');

    const embed = new MessageEmbed()
    .setTitle(`Бот добавлен на сервер!`)
    .setColor('GREEN')
    // .addField('Название сервера', guild.name())
    // .addField('Владелец сервера', guild.owner())
    // .setThumbnail(guild.iconURL())
    .setTimestamp();
    channel.send('<@322021124064149505>', embed);

    // Добавить чтобы бот писал на сервере... (представился)
    // Или же добавить чтобы бот писал в личные сообщения, тому кто его добавил. - это лучше

}