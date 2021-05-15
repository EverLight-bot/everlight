const { Discord } = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = async (client, message) => {
    const config = client.config;
    let channel = await client.channels.fetch('834741034902224907');

    const embed = new MessageEmbed()
    .setTitle(`Бота кикнули с сервера!`)
    .setColor('RED')
    .setDescription('...или он вышел')
    // .addField('Название сервера', guild.name())
    // .addField('Владелец сервера', guild.owner())
    // .setThumbnail(guild.iconURL())
    .setTimestamp();
    channel.send('<@322021124064149505>', embed);
}