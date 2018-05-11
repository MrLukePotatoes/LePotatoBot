const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('Luke coding', {type: 'WATCHING'});
});

client.on('message', async msg => {
    if(msg.author.bot) return;
    
    if (msg.content === './help') {
    	msg.channel.send('**__Commands List__** ```[ ./server | ./info | ./discord | ./help ]``` **__Updated By__** MrLukePotatoes#1488');
  	} else
        if (msg.content === 'Luke') {
    	msg.channel.send('You called Luke! What do u need? ');
  	} else
        if (msg.content === './discord') {
    	msg.channel.send('**Discord Link for the bot: Coming soon**');
  	} else
        if (msg.content === './server') {
    	msg.channel.send('**Join ZythronPE ```IP: play.zythronpe.ml | Port: 19132```');
  	} else
        if (msg.content === './info') {
    	msg.channel.send('**This bot was created on 9 May 2018! Using a code with Discord.js!** ```---``` **Version**: LUKE-1.0 (BETA) ```---``` **It is owned by** MrLukePotatoes#1488');
  	}
});

client.login(process.env.BOT_TOKEN);
