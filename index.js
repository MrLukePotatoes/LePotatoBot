const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('ACTIVE', {type: 'WATCHING'});
});

client.on('message', async message => {
    if (message.author.bot) return;
  
    if (message.content === '>user') {
    let userembed = new Discord.RichEmbed()
    .setTitle(`${message.author.tag}'s Discord User Info`)
    .setColor('RANDOM')
    .setThumbnail(client.user.avatarURL)
    .addField('Your ID:', message.author.id, true)
    .addField('Joined on:', message.member.joinedAt.toDateString(), true)
    .addField('Account Type:', message.member.user.bot ? 'Bot' : 'Personal', true)
    .setFooter(`Requested by ${message.author.tag}`)
    return message.channel.send(userembed);
     };
});

client.login(process.env.BOT_TOKEN);
