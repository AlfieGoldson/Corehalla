<template>
  <li class="ranked2v2-team-display">
    <img :src="rankedIconURL" class="tier-banner" />
    <p class="align-left">
      <span class="teammate-name">{{ teammate }}</span>&nbsp;
      &nbsp;•&nbsp;
      <span class="bold">{{ tier }}</span>
      ({{ rating }} Elo/{{ peak_rating }} Peak) | {{ games }} Games ({{ wins }}W/{{ losses }}L) • Winrate: {{ winrate }}%
    </p>
  </li>
</template>

<script>
export default {
  name: "Ranked2v2TeamDisplay",
  props: {
    teammate: String,
    tier: String,
    rating: String,
    peak_rating: String,
    games: String,
    wins: String,
    losses: String,
    winrate: String
  },
  computed: {
    rankedIconURL: () => {
      return `../../../public/assets/images/icons/ranked/${this.props.tier}.png`
    }
  }
};
</script>

<style lang="scss" scoped>
.ranked2v2-team-display {
  margin: 0 16px;
  padding: 2px 0;
  border-bottom: 1px solid #535353;
  font-size: 14px;
}
.tier-banner {
  display: inline-block;
  vertical-align: middle;
  width: 32px;
  margin: 0 16px;
}
p {
  display: inline-block;
}
.teammate-name {
  font-size: 16px;
  font-weight: bold;
}
</style>