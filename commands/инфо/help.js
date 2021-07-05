const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;

module.exports = {
  name: "help",
  aliases : ["хелп", "помощь"],
  description: "Показывает все доступные команды бота.",
  run: async (client, message, args) => {


    const roleColor =
      message.guild.me.displayHexColor === "#000000"
        ? "#ffffff"
        : message.guild.me.displayHexColor;

    if (!args[0]) {
      let categories = [];

      readdirSync("./commands/").forEach((dir) => {
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "Такой команды не существует.";

          let name = file.name.replace(".js", "");

          return `\`${name}\``;
        });

        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "В ходе выполнения." : cmds.join(" "),
        };

        categories.push(data);
      });

      const embed = new MessageEmbed()
        .setTitle("📬 Нужна помощь? Вот все мои команды:")
        .addFields(categories)
        .setDescription(
          `Используй \`${prefix}help\` и название команды чтобы получить помощь по определенной команде. Пример: \`${prefix}help slowmode\`.`
        )
        .setFooter(
          `Команду запросил ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(`Неверная команда! Используй \`${prefix}help\` чтобы посмотреть все команды!`)
          .setColor("FF0000");
        return message.channel.send(embed);
      }

      const embed = new MessageEmbed()
        .setTitle("Детали команды:")
        .addField("Префикс:", `\`${prefix}\``)
        .addField(
          "Команда:",
          command.name ? `\`${command.name}\`` : "безымянная команда"
        )
        .addField(
          "Сокращенная команда (a.k.a. aliases):",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "Для этой команды нет сокращений."
        )
        .addField(
          "Использование:",
          command.usage
            ? `\`${prefix}${command.name} ${command.usage}\``
            : `\`${prefix}${command.name}\``
        )
        .addField(
          "Описание:",
          command.description
            ? command.description
            : "Нет описания для этой команды."
        )
        .setFooter(
          `Команду запросил ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    }
  },
};