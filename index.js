const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('Luke-1.0 | ./help', {type: 'STREAMING'});
});

client.on('message', async msg => {
    if(msg.author.bot) return;
    
    if (msg.content === './help') {
    	msg.channel.send('**Command List | Page 1/2** ```[ ./server | ./info | ./discord | ./help | ```');
  	} else
        if (msg.content === 'Luke') {
    	msg.channel.send('You called Luke! What do u need? ');
  	} else
        if (msg.content === './discord') {
    	msg.channel.send('**Discord Link for the bot: Coming soon**');
  	} else
        if (msg.content === './server') {
    	msg.channel.send('**Join ZythronPE** ```IP: play.zythronpe.ml | Port: 19132```');
  	} else
        if (msg.content === './info') {
    	msg.channel.send('**This bot was created on 9 May 2018 with the use of codes and Heroku!');
  	} else
        if (msg.content === './github') {
        msg.channel.send('**__GITHUB__** https://github.com/MrLukePotatoes/LePotatoBot');
    } else
        if (msg.content === './about') {
        msg.channel.send('**Bot was created by @MrLukePotatoes#1488!** *Helped by @Zadezter#0207*');
    } else
        if (msg.content === './version') {
        msg.channel.send('**Version:** *Luke-1.0 [BETA]*');
    } else
        if (msg.content === '@MrLukePotatoes#1488') {
        msg.channel.send('**Ooo. Tagging him? Make sure he is online!**');
    } else
        if (msg.content === './help 2') {
        msg.channel.send('**Command List | Page 2/2** ```[ ./github | ./about | ./version | ./changelog ]```');
    } else
        if (msg.content === './changelog') {
        msg.channel.send('__**CHANGELOG | 5/12/18**__ ```Added ./help 2 and edited ./help```');
    }
});

client.login(process.env.BOT_TOKEN);
