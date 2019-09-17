const cheerio = require('cheerio');
const axios = require('axios');

const fetchLeaderboardPage = (bracket, region, page) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.brawlhalla.com/rankings/${bracket}/${region}/${page}`).then(res => {
            const $ = cheerio.load(res.data);
            var players = []
            $('tr').not('#rheader').each((i, elem) => {
                var player = {};
                player.name = $(elem).children('.pnameleft').text();
                var games = $($(elem).children('.pcenter').get(2)).text().split('-');
                player.wins = parseInt(games[0]);
                player.losses = parseInt(games[1]);
                player.games = player.wins + player.losses;
                players.push(player);
            })
            resolve(players);
        })
    });
}

const fetchTop250 = (bracket, region) => {
    var promises = []
    for (var i = 0; i < 5; i++) {
        promises[i] = fetchLeaderboardPage(bracket, region, i+1);
    }
    Promise.all(promises).then(data => {
        console.log(data)
    })
};

fetchTop250('1v1', 'jpn');