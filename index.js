const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('ACTIVE', {type: 'WATCHING'});
});

client.on('message', async message => {
    if (message.author.bot) return;
    
     };
});

client.login(process.env.BOT_TOKEN);
