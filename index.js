const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('and Learning at the same time', {type: 'PLAYING'});
});
client.on('message', async message => {
    if (message.author.bot) return;
    if (message.content === '>help') {
    let helpembed = new Discord.RichEmbed()
    .setTitle('- LePotatoBot | Commands -')
    .setDescription('Prefix [ > ]')
    .addField('No commands yet' 'Sorry') 
    .setColor('RANDOM')
    .setFooter(`Requested by ${message.author.tag}`)
    return message.channel.send(helpembed)
    };
});

client.login(process.env.BOT_TOKEN);
