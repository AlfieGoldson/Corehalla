<template>
  <div class="player-stats page">
    <div class="header">
      <div class="header-bg"></div>
      <div class="title">
        <input class="player-name" placeholder="Search Player..." />
        <a href="#" class="search-btn">
          <font-awesome-icon icon="search" />&nbsp;&nbsp;Search
        </a>
      </div>
      <nav class="header-nav">
        <ul>
          <li>
            <a href="#ranked1v1">1v1</a>
          </li>
          <li>
            <a href="#ranked2v2">2v2</a>
          </li>
          <li>
            <a href="#general">Cash</a>
          </li>
          <li>
            <a href="#legends">Power</a>
          </li>
          <li>
            <a href="#legends">Clans</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="content">
      <table id="leaderboard">
        <tr>
          <th>Rank</th>
          <th>Region</th>
          <th>Name</th>
          <th>Tier</th>
          <th>Games</th>
          <th>Win-Loss</th>
          <th>Winrate</th>
          <th>Rating</th>
          <th>Peak Rating</th>
        </tr>
        <Leaderboard1v1ListItem
          v-for="player in leaderboard"
          :key="player.brawlhalla_id"
          :rank="player.rank"
          :name="player.name"
          :id="player.brawlhalla_id"
          :rating="player.rating"
          :peak_rating="player.peak_rating"
          :tier="player.tier"
          :games="player.games"
          :wins="player.wins"
          :region="player.region"
        />
      </table>
    </div>
  </div>
</template>

<script>
import Leaderboard1v1ListItem from "@/components/Leaderboard1v1ListItem.vue";
import axios from "axios";

export default {
  name: "leaderboard",
  components: {
    Leaderboard1v1ListItem
  },
  data() {
    return {
      leaderboard: [
        {
          rank: "1",
          name: "Player 1",
          brawlhalla_id: 173537,
          best_legend: 31,
          best_legend_games: 211,
          best_legend_wins: 163,
          rating: 2729,
          tier: "Diamond",
          games: 211,
          wins: 163,
          region: "EU",
          peak_rating: 2729
        },
        {
          rank: "2",
          name: "Player 2",
          brawlhalla_id: 257670,
          best_legend: 50,
          best_legend_games: 254,
          best_legend_wins: 209,
          rating: 2722,
          tier: "Diamond",
          games: 254,
          wins: 209,
          region: "US-E",
          peak_rating: 2722
        },
        {
          rank: "3",
          name: "Player 3",
          brawlhalla_id: 1575415,
          best_legend: 14,
          best_legend_games: 112,
          best_legend_wins: 106,
          rating: 2683,
          tier: "Diamond",
          games: 112,
          wins: 106,
          region: "US-E",
          peak_rating: 2683
        }
      ]
    };
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  height: 326px;
  width: 100%;

  .header-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../assets/imgs/backgrounds/asuri-wallpaper.png");
    background-position: center;
    background-size: cover;
    filter: saturate(0.32);
    z-index: -2;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: "";
      width: 100%;
      height: 326px;
      background-image: linear-gradient(transparent, #181818);
    }
  }

  .title {
    padding-left: 24px;
    padding-top: 98px;

    .player-name {
      display: block;
      font-size: 92px;
      font-weight: bold;
      line-height: 80px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background-color: transparent;
      border: none;
      outline: none;
      color: white;
      overflow: hidden;
      margin-bottom: 16px;
    }

    .search-btn {
      padding: 10px 24px;
      background-color: #42a5f5;
      border-radius: 16px;
      text-transform: uppercase;
      font-size: 12px;
    }
  }
}

table {
  margin-top: 16px;
  border-spacing: 0;
  width: 100%;
  text-align: center;

  th {
    padding: 12px 0;
  }
}
</style>