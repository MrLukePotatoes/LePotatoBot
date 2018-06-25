const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('You', {type: 'WATCHING'});
});

client.on('message', async message => {
    if(message.author.bot) return;
   
   
    if (message.content === './help') {
    let helpembed = new Discord.RichEmbed()
    .setTitle('LePotatoBot‘s Command List')
    .addField(' ${message.author.tag} Here is what u requested :)')
    .addField('./discord', 'Bot‛s Discord Link ')
    .addField('./info:', 'Bot info ')
    .addField('./github', 'Github Repo ')
    .addField('./about', 'Another Bot info')
    .addField('./version', 'Bot version')
    .addField('./imc', 'ImpladeMC Discord and Server IP')
    .addField('./friends',.' My friends ;D ')
    .setFooter(' Coming SOON ./enemies = My enemies ')
    .setColor('RANDOM')
    return message.channel.send(helpembed);
    }
    
    
    if (message.content === '@MrLukePotatoes') {
    let lukeembed = new Discord.RichEmbed()
    .setTitle('You called Luke. What do u need')
    .addField(' @MrLukePotatoes#1448 ')
    .setColor('RANDOM')
    return message.channel.send(lukeembed);
    }
    
    
    if (message.content === './discord') {
    let discordembed = new Discord.RichEmbed()
    .setTitle(' Discord link for the bot ')
    .addField(' Coming soon ')
    .setColor('RANDOM')
    return message.channel.send(discordembed);
    }
    
    
    if (message.content === './info') {
    let infoembed = new Discord.RichEmbed()
    .setTitle(' Bot info ')
    .addField(' Made on May 9 2018 ')
    .setColor('RANDOM')
    return message.channel.send(infoembed);
    }
    
    
    if (message.content === './github') {
    let githubembed = new Discord.RichEmbed()
    .setTitle(' Github Repo ')
    .setDescription('Want to Contribute to MrLukePotatos Bot? You Can by [Clicking me](https://github.com/MrLukePotatoes/LePotatoBot)')
    .setColor('RANDOM')
    return message.channel.send(githubembed);
    }
    
    
    if (message.content === './Credits') {
    let aboutembed = new Discord.RichEmbed()
    .setTitle(' Credits ')
    .addField('@MrLukePotatoes#1448', 'for summoning me ')
    .addField('@Zadezter#0207', 'for Helping my Master ')
    .addField('@Wolfie#7213', 'For Fixing all My Erros
    .setColor('RANDOM')
    return message.channel.send(aboutembed);
    }
    
    
    if (message.content === './version') {
    let versionembed = new Discord.RichEmbed()
    .setTitle(' Bot Version ')
    .addField('Bot version 1.2')
    .addField('Updated by MrLukePotatoes')
    .setColor('RANDOM')
    return message.channel.send(versionembed);
    }
    
//Remove this one because can bring you Erros
    
//REMOVE HELP2 BECAUSE IT LOOKS STUPID 😂
    
    if (message.content === './changelog') {
    let changelogembed = new Discord.RichEmbed
    .setTitle('Command doesnt exist anymore ')
    .addField('Luke', 'may have deleted this command ')
    .addField('Do', './help for commands ')
    .setColor('RANDOM')
    return message.channel.send(changelogembed);
    }
    
    
    if (message.content === './imc') {
    let imcembed = new Discord.RichEmbed
    .setTitle('ImpladeMC Discord Server & Server IP and Port ')
    .setDrscription(' Soon ')
    .setColor('RANDOM')
    return message.channel.send(imcembed);
    }
    
    
    if (message.content === './friends') {
    let friendsembed = new Discord.RichEmbed
    .setTitle('Lukes friend list ')
    .setDescription('Zadezter\nWolfkid\nhaKingdomsCraft\nFreeGamingHere')
    .setColor('RANDOM')
    return message.channel.send(friendsembed);
    }
    
    
    if (message.content === './picture') {
    let pictureembed = new Discord.RichEmbed()
    .setTitle('Hey Steve, is this your profile picture? ;)')
    .setColor('RANDOM')
    .setImage(message.author.avatarURL + "?size=0") 
    .setFooter(`Requested by ${message.author.tag}`)
    return message.channel.send(pictureembed);
    }
});

client.login(process.env.BOT_TOKEN);
