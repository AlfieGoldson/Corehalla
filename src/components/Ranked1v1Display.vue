<template>
  <div class="ranked1v1-display">
    <p class="align-right">
      <span class="italic">Tier&nbsp;</span>
      <span class="bold">Emerald</span>
      <br />143 Games (92W/51L)
      <br />Current Elo: 2312
      <br />Peak Elo: 2312
      <br />Winrate: 64%
      <br />
      <img src="/assets/images/icons/flags/EU.png" width="40px" height="40px" />
    </p>
    <img src="/assets/images/ranked-banners/Emerald.png" class="tier-banner" />
    <p class="align-left">
      <span class="bold">Ada&nbsp;</span>
      <span class="italic">Highest Legend</span>
      <br />97 Games (63W/34L)
      <br />Current Elo: 2277
      <br />Peak Elo: 2277
      <br />Winrate: 65%
      <br />
      <img src="/assets/images/icons/legends/ada.png" width="40px" height="40px" />
    </p>
  </div>
</template>

<style lang="scss" scoped>
.ranked1v1-display {
  text-align: center;
  position: relative;
  left: 50%;
  transform: translate(-50%);
}
.tier-banner {
  display: inline-block;
  vertical-align: top;
  width: 160px;
  margin: 0 16px;
}
p {
  display: inline-block;
  line-height: 28px;
}
</style>