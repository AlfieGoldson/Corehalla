const Discord = require('discord.js');
const client = new Discord.Client();

const bh_api = require("corehalla")(process.env.BRAWLHALLA_API_KEY);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    const args = msg.content.split(' ');
    if (args[0].startsWith('!')) {
        switch(args[0]) {
            case '!stats':
            msg.channel.send('Your Stats');
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