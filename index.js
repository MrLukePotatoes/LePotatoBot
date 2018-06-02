const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('Luke changing codes', {type: 'WATCHING'});
});

client.on('message', async msg => {
    if(msg.author.bot) return;
   
    if (msg.content === './help') {
      let helpembed = Discord.RichEmbed()
      .settitle('LePotatoBot‘s Command List')
      .addField(' ${message.author.tag} Here is what u requested :)')
      .addField(' ./discord = Bot‛s Discord Link ')
      .addField(' ./info = Bot info ')
      .addField(' ./github = Github Repo ')
      .addField(' ./about = Another Bot info')
      .addField(' ./version = Bot version')
      .addField(' ./imc = ImpladeMC Discord and Server IP')
      .addField(' ./friends = My friends ;D ')
      .addField(' Coming SOON ./enemies = My enemies ')
      return message.channel.send(helpembed)
    };
    
        if (msg.content === 'Luke') {
    	msg.channel.send('You called Luke! What do u need? ');
  	} else
        if (msg.content === './discord') {
    	msg.channel.send('**Discord Link for the bot: Coming soon**');
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
    } else
        if (msg.content === './imc') {
        msg.channel.send('__**IMPLADEMC DISCORD SERVER**__ ```Coming soon.``` __**IMPLADEMC SERVER IP AND PORT**__ ```Coming soon```');
    } else
        if (msg.content === './friends') {
        msg.channel.send('__**FRIENDS**__ ```Zadezter, Pooofy, TheMaskGuy, haKingdomsCraft, FreeGamingHere, JustyGamer and More to be added```');
 };
    
   if (message.content === './picture') {
     let pictureembed = new Discord.RichEmbed()
     .setTitle('Hey ${message.author.tag}, is this your profile picture ;)')
     .setColor('RANDOM')
     .setImage(message.author.avatarURL + "?size=2048") 
     .setFooter(`Requested by ${message.author.tag}`)
     return message.channel.send(pictureembed)
   };
   
});

client.login(process.env.BOT_TOKEN);
