const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('Myself being reborn', {type: 'WATCHING'});
});

client.on('message', async message => {
    if (message.author.bot) return;
    
    if (message.content === '>help') {
      let helpembed = new Discord.RichEmbed()
      .setTitle('- LePotatoBot | Commands -')
      .setDescription('Prefix [ > ]')
      .addField('>gayrate','Shows how much gay you are') 
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(helpembed);
    };
    
    if (message.content === '>gayrate') {
      let user = message.mentions.users.first() || message.author;
      let gayembed = new Discord.RichEmbed()
      .setAuthor(`${message.author.username}`)
      .addField(`Gay Rate`, `Wow! **${Math.floor(Math.random() * 100)}% Gay**! :gay_pride_flag:`)
      return message.channel.send(gayembed);
    };
    
    if (message.content === '>hmcwyg') {
      let user = message.mentions.users.first() || message.author;
      let gayembed = new Discord.RichEmbed()
      .setAuthor(`${message.author.username}`)
      .addField(`Gay Rate`, `Around the World **${Math.floor(Math.random() * 1000000000)} people has a crush on you **!`)
      return message.channel.send(gayembed)
     };
});

client.login(process.env.BOT_TOKEN);
