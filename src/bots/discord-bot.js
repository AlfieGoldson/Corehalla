const Discord = require('discord.js');
const client = new Discord.Client();

const bh_api = require("corehalla")(process.env.BRAWLHALLA_API_KEY);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    const args = msg.content.split(' ');
    const userID = msg.author.id;
    if (args[0].startsWith('!')) {
        switch(args[0]) {
            case '!stats':
            msg.channel.send('Your Stats');
            break;

            case '!rank':
            msg.channel.send('Your Stats');
            break;

            case '!lead':
            msg.channel.send(generateLeadEmbed(args[1] || '1v1', args[2] || 'all', args[3] || '1'));
            break;

            default:
            break;
        }
    }
//   if (msg.content === 'ping') {
//     msg.reply('Pong!');
//   }
});

client.on('error', console.error);

client.login(process.env.DISCORD_BOT_TOKEN);

const generateLeadEmbed = (bracket, region, page) => {
    bh_api.fetchLeaderboard({ bracket, region, page }).then(data => {

    })
}