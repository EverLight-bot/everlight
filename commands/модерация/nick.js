const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "nick",
    description: "Меняет никнейм упомянутому пользователю.",
    enabled: true,
    aliases: ["ник", "nickname"],
    usage: "@member рандомный_никнейм",

    run: async (client, message, args) => {
        if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("У вас нет права **MANAGE_NICKNAMES**");

        const member = message.mentions.members.first();

        if (!member) return message.reply("вы не указали пользователя которому нужно изменить никнейм!");

        const arguments = args.slice(1).join(" ");

        if (!arguments) return message.reply("пожалуйста укажите никнейм!");

        try {
            member.setNickname(arguments);
            message.reply(`пользователю ${member.toString()} успешно изменен ник!`);
        } catch (err) {
            console.log(err);
            message.reply(
                "У меня нет разрешения на изменение " + member.toString() + " никнейма!"
            );
        }
    },
};