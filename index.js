const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('My Owner', {type: 'WATCHING'});
});

client.on('message', async message => {
    if (message.author.bot) return;
    
    if (message.content === 'l>help') {
      let helpembed = new Discord.RichEmbed()
      .setTitle('- LePotatoBot | Commands -')
      .setDescription('Prefix [ l> ]')
      .addField('l>gayrate','Shows how much gay you are')
      .addField('l>hmc','How many crush will you get in aroumd the world')
      .addField('l>say','Say anything using the command and the bot will say it')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(helpembed);
    };
    
    if (message.content === 'l>gayrate') {
      let user = message.mentions.users.first() || message.author;
      let gayembed = new Discord.RichEmbed()
      .setAuthor(`${message.author.username}`)
      .addField(`Gay Rate`, `Wow! **${Math.floor(Math.random() * 100)}% Gay**! :gay_pride_flag:`)
      return message.channel.send(gayembed);
    };
    
    if (message.content === 'l>hmc') {
      let user = message.mentions.users.first() || message.author;
      let hmcwygembed = new Discord.RichEmbed()
      .setAuthor(`${message.author.username}`)
      .addField(`How Many Crush`, `Around the World **${Math.floor(Math.random() * 7000000000)}** people has a crush on you!`)
      return message.channel.send(hmcwygembed)
    };
    
    if (message.content === 'l>say') {
      let sayembed = new Discord.RichEmbed()
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{});
      message.channel.send(sayMessage);
      return message.channel.send(sayembed)
     };
});

client.login(process.env.BOT_TOKEN);
