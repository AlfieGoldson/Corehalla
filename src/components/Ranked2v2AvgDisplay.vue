<template>
  <div class="ranked2v2-avg-display">
    17 Teams • 145 Games (100W/45L)
    <br />
    <br />
    <img :src="rankedIconURL" class="tier-banner" />
    <p class="align-left">
      <span class="bold">Average 2v2 Stats</span>
      <br />
      ({{ avg_rating }} Elo/{{ avg_peak_rating }} Peak)
      <br />
      {{ avg_games }} Games ({{ avg_wins }}W/{{ avg_losses }}L)
      <br />
      Winrate: {{ avg_winrate }}%
    </p>
  </div>
</template>

<script>
export default {
  name: "Ranked2v2AvgDisplay",
  props: {
    avg_rating: String,
    avg_peak_rating: String,
    avg_games: String,
    avg_wins: String,
    avg_losses: String,
    avg_winrate: String
  },
  computed: {
    rankedIconURL: () => {
      return `../../../assets/images/ranked-banners/Bronze 2.png`;
    }
  }
};
</script>

<style lang="scss" scoped>
.ranked2v2-avg-display {
  margin: 0 16px 16px 16px;
  padding: 2px 0;
  font-size: 14px;
}
.tier-banner {
  display: inline-block;
  vertical-align: top;
  width: 80px;
  margin: 0 16px;
}
p {
  display: inline-block;
  line-height: 24px;
}
.teammate-name {
  font-size: 16px;
  font-weight: bold;
}
</style>