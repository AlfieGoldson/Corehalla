<template>
  <tr class="leaderboard1v1-list-item">
    <td>{{ rank }}</td>
    <td>{{ region }}</td>
    <td class="align-left">{{ name }}</td>
    <td>{{ tier }}</td>
    <td>{{ games }}</td>
    <td>{{ wins }}-{{ games - wins }}</td>
    <td>{{ calcWinrate(wins, games) }}%</td>
    <td>{{ rating }}</td>
    <td>{{ peak_rating }}</td>
  </tr>
</template>

<script>
export default {
  name: "Leaderboard1v1ListItem",
  props: {
    rank: String,
    name: String,
    id: Number,
    rating: Number,
    peak_rating: Number,
    tier: String,
    games: Number,
    wins: Number,
    region: String
  },
  methods: {
    calcWinrate: (wins, games) => {
      return Math.round((wins / games) * 100);
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