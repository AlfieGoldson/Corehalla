<template>
  <tr class="leaderboard1v1-list-item">
    <td>{{ player.rank }}</td>
    <td>{{ player.region }}</td>
    <td class="align-left">
      <router-link :to="getPlayerOneStatsURL">{{ player.player_one_name }}</router-link>
    </td>
    <td>{{ player.tier }}</td>
    <td>{{ player.games }}</td>
    <td>{{ player.losses }}</td>
    <td>{{ player.winrate }}</td>
    <td>{{ player.rating }}</td>
    <td>{{ player.peak_rating }}</td>
  </tr>
</template>

<script>
export default {
  name: "Leaderboard1v1ListItem",
  props: {
    player: Object
  },
  computed: {
    getPlayerOneStatsURL() {
      return `/stats/player/${this.player.player_one_id}`;
    }
  }
};
</script>

<style lang="scss">
.leaderboard1v1-list-item {
  border-bottom: 1px solid white;

  &:hover {
    background-color: #121212;
  }
  td {
    padding: 8px;
    font-size: 14px;
  }
}
</style>