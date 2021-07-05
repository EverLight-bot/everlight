module.exports = (client) => {
    let { DateTime } = require('luxon');
    const config = require("../config.json");

// client.guilds.cache.size
// name: `${client.guilds.cache.size} серверов | ${client.users.cache.size} пользователей | $help`,
    console.log(`Бот запущен, залогинен как ${client.user.tag}.`);

    /*
    client.user.setPresence({
        activity: {
            name: `${config.prefix}help | ${DateTime.now().setZone('Europe/Moscow').toFormat("HH:mm МСК")}`,
            type: 'WATCHING',
        }, status: 'idle'}).catch(console.error);
        */
    
        // .then(console.log).catch(console.error);

        const activities_list = [
            `${config.prefix}help | ${DateTime.now().setZone('Europe/Moscow').toFormat("HH:mm МСК")}`,
            `${client.guilds.cache.size} серверов`
          ];
        
          setInterval(() => {
            const index = Math.floor(Math.random() * activities_list.length);
            client.user.setActivity(activities_list[index], {
              type: "WATCHING",
            });
          }, 15000);
    
}