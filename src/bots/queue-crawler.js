const bh_api = require("corehalla")(process.env.BRAWLHALLA_API_KEY);

const brackets = ['1v1', '2v2'];
const regions = ['us-e', 'eu', 'sea', 'brz', 'aus', 'us-w', 'jpn'];
const leaderboards = [];
const queues = [];

const fetchLeaderboardPage = (bracket, region, page, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            bh_api.fetchLeaderboard({ bracket, region, page }).then(data => {
                resolve(data);
            })
        }, delay);
    });
}

const fetchTop250 = (bracket, region) => {
    return new Promise((resolve, reject) => {
        var promises = []
        for (var i = 0; i < 5; i++) {
            promises[i] = fetchLeaderboardPage(bracket, region, i+1, 1500);
        }
        Promise.all(promises).then(data => {
            resolve(data);
        })
    });
};

var bracketIndex = 0;
var regionIndex = 0;

setInterval(() => {
    fetchTop250(brackets[bracketIndex], regions[regionIndex]).then(data => {
        updateQueue(bracketIndex, regionIndex, Array.prototype.concat.apply([], data));
    })
    regionIndex++;
    if (regionIndex >= regions.length) {
        regionIndex = 0;
        bracketIndex = 1 - bracketIndex;
    }
}, 25000);

const updateQueue = (bracketIndex, regionIndex, leaderboard) => {
    const index = regionIndex + bracketIndex * regions.length;
    const newQueues = [];
    if (leaderboard[index] === undefined) {
        leaderboards[index] = data;
        return;
    }
    else {
        for (var newPlayerData in data) {
            for (var player in leaderboards[index]) {
                if (player.brawlhalla_id === newPlayerData.brawlhalla_id) {
                    if (player.games < newPlayerData.games) {
                        const newQueue = {
                            name: newPlayerData.name,
                            rank: newPlayerData.rank,
                            rating: newPlayerData.rating,
                            peak_rating: newPlayerData.peak_rating,
                            games: newPlayerData.games,
                            wins: newPlayerData.wins,
                            losses: newPlayerData.games - newPlayerData.wins,
                            streak: newPlayerData.rating === player.rating ? 0 : ( newPlayerData.rating < player.rating ? -1 : 1)
                        }
                        newQueues.push(newQueue);
                    }
                }
            }
        }
        queues[index] = newQueues;
    }
    console.log(queues);
}