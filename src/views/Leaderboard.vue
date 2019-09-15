<template>
  <div class="player-stats page">
    <div class="header">
      <div class="header-bg"></div>
      <div class="title">
        <input ref="search_input" class="player-name" placeholder="Search Player..." />
        <a class="search-btn" v-on:click="search">
          <font-awesome-icon icon="search" />&nbsp;&nbsp;Search
        </a>
      </div>
      <nav class="header-nav">
        <ul>
          <li>
            <router-link to="/stats/leaderboard/1v1">1v1</router-link>
          </li>
          <li>
            <router-link to="/stats/leaderboard/2v2">2v2</router-link>
          </li>
          <li>
            <router-link to="/stats/leaderboard/cash">Cash</router-link>
          </li>
          <li>
            <router-link to="/stats/leaderboard/power">Power</router-link>
          </li>
          <li>
            <router-link to="/stats/leaderboard/clans">Clans</router-link>
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
          :key="player.player_one_id"
          :player="player"
        />
      </table>
    </div>
  </div>
</template>

<script>
import Leaderboard1v1ListItem from "@/components/Leaderboard1v1ListItem.vue";

export default {
  name: "leaderboard",
  components: {
    Leaderboard1v1ListItem
  },
  computed: {
    leaderboard() {
      return this.$store.getters.fetchLeaderboard.leaderboard;
    },
    leaderboard_options() {
      return this.$store.getters.fetchLeaderboard.options;
    }
  },
  methods: {
    search() {
      this.$router.push({
        path: "/stats/leaderboard",
        params: {
          bracket: this.$route.params.bracket || "1v1",
          region: this.$route.params.region || "all",
          page: this.$route.params.page || "1"
        },
        query: {
          player: this.$refs.search_input.value || ""
        }
      });
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.dispatch("fetchLeaderboard", {
      bracket: to.params.bracket || "1v1",
      region: to.params.region || "all",
      page: to.params.page || "1",
      player_name: to.query.player || ""
    });
    next();
  },
  mounted() {
    this.$store.dispatch("fetchLeaderboard", {
      bracket: this.$route.params.bracket || "1v1",
      region: this.$route.params.region || "all",
      page: this.$route.params.page || "1",
      player_name: this.$route.query.player || ""
    });
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
      cursor: pointer;
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