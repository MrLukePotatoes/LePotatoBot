const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('You', {type: 'WATCHING'});
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
      let versionembed = Discord.RichEmbed()
      .settitle(' Bot Version ')
      .addField('Bot version 1.2')
      .addField('Updated by MrLukePotatoes')
      return message.channel.send(versionembed)
    };
        
    if (msg.content === '@MrLukePotatoes#1488') {
      let taglukeembed = Discord.RichEmbed()
      .settitle(' Bruv u hacks ')
      .addField(' Reporting... ')
      return message.channel.send(taglukeembed)
    };
        
    if (msg.content === './help 2') {
      let help2embed = Discord.RichEmbed
      .settitle(' Command doesnt exist anymore ')
      .addField(' Luke may have deleted this command ')
      .addField(' Do ./help for commands ')
      return message.channel.send(help2embed)
    };
        
    if (msg.content === './changelog') {
      let changelogembed = Discord.RichEmbed
      .settitle(' Command doesnt exist anymore ')
      .addField(' Luke may have deleted this command ')
      .addField(' Do ./help for commands ')
      return message.channel.send(changelogembed)
    };
        
    if (msg.content === './imc') {
      let imcembed = Discord.RichEmbed
      .settitle(' ImpladeMC Discord Server & Server IP and Port ')
      .addField(' Soon ')
      return message.channel.send(imcembed)
    };
        
    if (msg.content === './friends') {
      let friendsembed = Discord.RichEmbe
      .settitle(' Lukes friend list ')
      .addField(' Zadezter ')
      .addField(' JustyGamer ')
      .addField(' FreeGamingHere ')
      .addField(' haKingdomsCraft ')
      .addField(' More to be added ')
      return message channel.send(friendsembed)
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
