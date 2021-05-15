module.exports = (client, message) => {
    if (message.author.bot) return;

    let prefix = client.config.prefix; 

       if (!message.content.startsWith(prefix)) return;

       const args = message.content.slice(prefix.length).trim().split(/ +/g);

        const command = args.shift().toLowerCase();
     
       const cmd = client.commands.get(command);
     
       if (!cmd) return; // Если команда не существует, то ничего не делать ..
   
       cmd.run(client, message, args);
   
};