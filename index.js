require('dotenv').config();

const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.json('бот запущен!');
});
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);


const Discord = require("discord.js");
const client = new Discord.Client({ ws: { properties: { $browser: "Discord Android" }} });
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

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 


require('./utils/functions.js')(client);

client.config = config;



client.login(process.env.TOKEN);