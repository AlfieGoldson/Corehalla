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
            generatePlayerRankEmbed(4281946).then(embed => {
                msg.channel.send({ embed });
            })
            break;

            case '!lead':
            generateLeadEmbed('1v1', args[1] || 'all', args[2] || '1').then(embed => {
                msg.channel.send({ embed });
            }).catch(err => console.log(err));
            break;

            default:
            break;
        }
    }
});

client.on('error', console.error);

client.login(process.env.DISCORD_BOT_TOKEN);

const generateLeadEmbed = (bracket, region, page) => {
    return new Promise((resolve, reject) => {
        bh_api.fetchLeaderboard({ bracket, region, page: Math.floor(page/2) + (page%2) }).then(data => {
            var embed = {
                color: 0x0099ff,
                title: `${region.toUpperCase()}/${bracket} • page ${page}`,
                url: `http://beta.corehalla.com/stats/leaderboard/${bracket}/${region}/${page}`,
                author: {
                    name: 'Corehalla',
                    url: 'http://corehalla.com'
                },
                description: `${region.toUpperCase()}/${bracket} Leaderboard • page ${page}`,
                fields: [{
                    name: '_',
                    value: '',
                    inline: true
                }]
            }

            for (var i = 0; i < 25; i++) {
                const player = data[i + 25 * (1 - (page % 2))];
                if (player)
                    embed.fields[0].value += `${player.rank} - ${player.name} (${player.rating}/${player.peak_rating} Peak)\n`;
                else
                    break;
            }
            resolve(embed);
        })
        .catch(err => reject(err))
    })
}

const generatePlayerRankEmbed = (player_id) => {
    return new Promise((resolve, reject) => {
        bh_api.fetchPlayerStatsFormat(player_id).then(player => {
            var embed = {
                color: 0x0099ff,
                title: `duh`,
                url: `http://beta.corehalla.com/stats/player/4281946`,
                author: {
                    name: 'Corehalla',
                    url: 'http://corehalla.com'
                },
                description: `Duh`,
                fields: [{
                    name: 'Name',
                    value: `[${player.name}](http://beta.corehalla.com/stats/player/4281946)\n
                    < [${player.clan.name}](http://beta.corehalla.com/stats/clan/XXXXX) >`,
                    inline: true
                }]
            }
            resolve(embed);
        })
    })
}