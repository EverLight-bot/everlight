require('dotenv').config();

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs")
const Enmap = require("enmap");

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Загружена команда ${commandName}`);
    client.commands.set(commandName, props);
  });
});


require('./utils/functions.js')(client);

client.config = config;


// setTimeout(() => {
//   throw client.login(process.env.TOKEN);
// }, 5000);


client.login(process.env.TOKEN);