<template>
  <div class="player-stats page">
    <div class="header">
      <div class="header-bg"></div>
      <div class="title">
        <span class="player-name">Alfie</span>
        <span class="player-level">Level {{ player.level }} ({{ player.xp }} xp)</span>
        <span class="player-time-played">Time spent in game: 1,518h 32m 54s</span>
        <ul class="social-icons">
          <font-awesome-icon class="social-icon" :icon="['fab', 'twitter']" />
          <font-awesome-icon class="social-icon" :icon="['fab', 'youtube']" />
          <font-awesome-icon class="social-icon" :icon="['fab', 'steam']" />
          <font-awesome-icon class="social-icon" :icon="['fab', 'discord']" />
          <font-awesome-icon class="social-icon" :icon="['fab', 'instagram']" />
          <font-awesome-icon class="social-icon" :icon="['fab', 'reddit']" />
          <font-awesome-icon class="social-icon" :icon="['fab', 'twitch']" />
        </ul>
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
            <a href="#general">General</a>
          </li>
          <li>
            <a href="#legends">Legends</a>
          </li>
          <li>
            <a href="#weapons">Weapons</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="content">
      <div id="ranked1v1">
        <span class="category-title">Ranked 1v1</span>
        <Ranked1v1Display />
        <p>
          Most Played Legend
          <span class="bold">Ada</span> - ?? Games (??W/??L) - ??% Winrate
          <br />Most Played Weapon
          <span class="bold">Spear</span> - ?? Games (??W/??L) - ??% Winrate
          <br />Highest Winrate Legend
          <span class="bold">Ada</span> - ?? Games (??W/??L) - ??% Winrate
          <br />Highest Winrate Weapon
          <span class="bold">Spear</span> - ?? Games (??W/??L) - ??% Winrate
        </p>
      </div>
      <div id="ranked2v2">
        <span class="category-title">Ranked 2v2</span>

        <Ranked2v2AvgDisplay
          avg_rating="1000"
          avg_peak_rating="1050"
          avg_games="50"
          avg_wins="25"
          avg_losses="25"
          avg_winrate="50"
        />
        <ul class="ranked2v2-teams">
          <Ranked2v2TeamDisplay
            teammate="MRY"
            tier="Diamond"
            rating="1975"
            peak_rating="2048"
            games="115"
            wins="65"
            losses="50"
            winrate="56.4"
          />
        </ul>
      </div>
      <div id="legends">
        <span class="category-title">Legends</span>
        <LegendStats />
      </div>
    </div>
  </div>
</template>

<script>
import Ranked1v1Display from "@/components/Ranked1v1Display.vue";
import Ranked2v2TeamDisplay from "@/components/Ranked2v2TeamDisplay.vue";
import Ranked2v2AvgDisplay from "@/components/Ranked2v2AvgDisplay.vue";
import LegendStats from "@/components/PlayerStatsLegendStats.vue";
// import axios from "axios";

export default {
  name: "playerStats",
  components: {
    Ranked1v1Display,
    Ranked2v2TeamDisplay,
    Ranked2v2AvgDisplay,
    LegendStats
  },
  computed: {
    player() {
      return this.$store.getters.fetchPlayerStats;
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.dispatch("fetchPlayerStats", to.params.id);
    next();
  },
  mounted() {
    this.$store.dispatch("fetchPlayerStats", this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
  .header-bg {
    background-image: url("/assets/images/backgrounds/ada-wallpaper.png");
  }
.ranked2v2-teams {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>