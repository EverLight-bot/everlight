const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
module.exports.run = async(client, message, args) => {
    const em = client.em;
    const yessir = client.yessir;
    const config = client.config;

    async function showCommand(commandName){
        if (!client.commands.get(commandName)) return message.channel.send(em("Команда не найдена", "Эта команда не существует", config.errorColor));
    let command = client.commands.get(commandName);
    if (command.help.hidden) return message.channel.send(em("Команда не найдена", "Эта команда не существует", config.errorColor));    
    let embed = new MessageEmbed()
    .setAuthor(command.help.name, client.user.avatarURL())
    .setColor(config.embedColor)
    .setDescription(command.help.description);
    
    if (command.help.usage.length > 0) embed.addField(`Использование команды ${command.help.name}`, `\`\`\`${config.prefix}${command.help.name} ${command.help.usage}\`\`\``);
    
    embed.addField("Можно и так использовать", command.help.aliases);

    // embed.addField("Команда включена?", yessir(command.help.enabled));

message.channel.send(embed);

return;    
    }

    async function showMenu(){
        let embed = new MessageEmbed()
        .setAuthor('Справка по всем командам', client.user.avatarURL())
        .setDescription(`Префикс бота -  \`${config.prefix}\`\nСервер поддержки бота: https://discord.gg/Nh6uQFTe6M`)
        .addField('Сайт бота', 'http://everlight-bot.cf/')
        .addField('Команды бота', 'https://sh4re.be/12860')
        .setColor(config.embedColor)
        .setTimestamp()
        .setFooter(`Создатель бота - ${config.ownerTAG}`);

if (client.commands.length > 25) return;


/*

await client.commands.forEach(cmd => {
    if (cmd.help.hidden) return;
    if (cmd.help.isAlias) return;
// embed.addField(`Команда **${cmd.help.name}**: ${cmd.help.description}\nИспользование команды **${cmd.help.name}**:`,`${config.prefix}${cmd.help.name} ${cmd.help.usage}`);
embed.addField(`Команда **${cmd.help.name}**`, `${cmd.help.description}`);
})

*/

message.channel.send(embed);
return;
    }

    args[0] ? showCommand(args[0]) : showMenu();

}
module.exports.help = {
    name: "help",
    description: "Показывает справку по всем командам.",
    enabled: true,
    aliases: "-",
    usage: "[команда]"
}