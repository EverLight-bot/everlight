const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const math = require('discord-math');

module.exports = {
    name: "calc",
    description: "Бот делает математику за тебя!\nПока что доступно всего 5 операций это: +, -, *, /, **",
    enabled: true,
    aliases: ["посчитать", "calculate"],
    usage: "<цифра 1> <операция> <цифра 2>",

    run: async (client, message, args) => {
        
    const em = client.em;
    const yessir = client.yessir;
    const config = client.config;
    try {
        let num1 = Number(args[0]);
        let operation = args[1];
        let num2 = Number(args[2]);
        
        if (!num1) return message.channel.send('Вы не указали 1 цифру!');
        if (!isNaN(operation)) return message.channel.send('Используйте пока что только эти операции +, -, *, / или **');
        if (!operation) return message.channel.send('Операция не была указана! (+, -, *, /, **)');
        if (!num2) return message.channel.send('Вы не указали 2 цифру!');

        message.channel.send(`Ответ: ${math.calculate(num1, operation, num2)}`);
    } catch (e) {
        console.log(e);
    }

    
}
}

/*
exports.help = {
    name: "calc",
    description: "Бот делает математику за тебя!\nПока что доступно всего 5 операций это: +, -, *, /, **",
    enabled: true,
    aliases: "-",
    usage: "<цифра 1> <операция> <цифра 2>"
}
*/