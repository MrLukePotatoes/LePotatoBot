const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('with code :3', {type: 'PLAYING'});
});

client.on('message', async msg => {
    if(msg.author.bot) return;
    
    if (msg.content === '$help') {
    	msg.channel.send('**__Commands List__** ```[ $server | $info | $ghostview | $help ]``` **__Updated By__** MrLukePotatoes#1488');
  	} else
        if (msg.content === 'Luke') {
    	msg.channel.send('You have called him. Please tell, what do you want to talk about?');
  	} else
        if (msg.content === '$ghostview') {
    	msg.channel.send('**Download the latest plugin builds on Poggit at:** __http://poggit.pmmp.io/ci/Zadezter/GhostView__ ```---``` **Check all source code what it made by Zadezter on Github at:** __http://github.com/Zadezter/GhostView__');
  	} else
        if (msg.content === '$server') {
    	msg.channel.send('**This is a ZythronPE server! Come and play if you have a time!** ```IP: play.zythronpe.ml | Port: 19132```');
  	} else
        if (msg.content === '$info') {
    	msg.channel.send('**This bot was created on 9 May 2018! Using a code with Discord.js!** ```---``` **Version**: IMB-1.0 (BETA) ```---``` **It is owned by** MrLukePotatoes#1488');
  	}
});

client.login(process.env.BOT_TOKEN);
