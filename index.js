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
    
    if (msg.content === '@MrLukePotatoes') {
      let lukeembed = Discord.RichEmbed()
      .settitle('You called Luke. What do u need')
      .addField(' @MrLukePotatoes#1448 ')
      return message.channel.send(lukeembed)
    };
         
    if (msg.content === './discord') {
      let discordembed = Discord.RichEmbed()
      .settitle(' Discord link for the bot ')
      .addField(' Coming soon ')
      return message.channel.send(lukeembed)
    };
        
    if (msg.content === './info') {
      let infoembed = Discord.RichEmbed()
      .settitle(' Bot info ')
      .addField(' Made on May 9 2018 ')
      return message.channel.send(infoembed)
    };
        
    if (msg.content === './github') {
      let githubembed = Discord.RichEmbed()
      .settitle(' Github Repo ')
      .addField(' https://github.com/MrLukePotatoes/LePotatoBot ')
      return message.channel.send(githubembed)
    };
    if (msg.content === './about') {
      let aboutembed = Discord.RichEmbed()
      .settitle(' Credits ')
      .addField(' @MrLukePotatoes#1448 for summoning me ')
      .addField(' @Zadezter#0207 for Helping my Master ')
      return message.channel.send(aboutembed)
    };          
      
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
