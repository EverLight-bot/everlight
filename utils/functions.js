const Discord = require("discord.js");

module.exports = async (client) => {
    client.em = function (author, description, color, title, footer, nolenny) {
        if (!color) color = "RANDOM";
        if (!author) author = client.user.tag;
        let embed = new Discord.MessageEmbed()
            .setAuthor(author, client.user.displayAvatarURL())
            .setColor(color);

        if (title) embed.setTitle(title);

        if (description) embed.setDescription(description);

        if (footer) embed.setFooter(footer);

        return embed;

    }


    client.yessir = function (value) {
        if (!value) return "Нет";
        if (typeof value === "object" || typeof value === "array") {
            if (!value.length || !value.length <= 0) return "Нет";
            else return "Да";
        }

        if (typeof value === "boolean") {
            if (value === true) return "Да";
            if (value === false || value === null || value === undefined) return "Нет";
        }

        if (typeof value === "number") {
            if (!~value || value === 0) return "Нет";
            else return "Да";
        }

        return "Нет";

    }
}