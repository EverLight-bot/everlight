require('dotenv').config();

const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.json('Бот запущен..');
});
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

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
client.cooldowns = new Discord.Collection();


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