module.exports = (client) => {
// client.guilds.cache.size
// name: `${client.guilds.cache.size} серверов | ${client.users.cache.size} пользователей | $help`,
    console.log(`Бот запущен, залогинен как ${client.user.tag}.`);
    client.user.setPresence({
        activity: {
            name: `$help`,
            type: 'WATCHING',
        }, status: 'idle'}).catch(console.error);
    
        // .then(console.log).catch(console.error);
    
}