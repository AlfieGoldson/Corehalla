<template>
  <div id="app">
    <div class="appnav">
      <div class="main-logo-container">
        <router-link to="/">
          <img src="./assets/imgs/brand/logo.png" alt="Corehalla Logo" class="main-logo" />
        </router-link>
      </div>
      <div class="window-btns">
        <div class="window-btn window-minimize-btn">
          <font-awesome-icon :icon="['far', 'window-minimize']" />
        </div>
        <div class="window-btn window-maximize-btn">
          <font-awesome-icon :icon="['far', 'square']" />
        </div>
        <div class="window-btn window-close-btn">
          <font-awesome-icon icon="times" />
        </div>
      </div>
    </div>
    <div class="sidenav">
      <nav>
        <ul>
          <li>
            <router-link to="/leaderboard">
              <font-awesome-icon class="nav-item-icon" icon="star" />
              <span class="nav-item-label">Leaderboard</span>
            </router-link>
          </li>
          <li>
            <router-link to="/p">
              <font-awesome-icon class="nav-item-icon" icon="chart-pie" />
              <span class="nav-item-label">My Stats</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <font-awesome-icon class="nav-item-icon" icon="user-friends" />
              <span class="nav-item-label">My Clan</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <font-awesome-icon class="nav-item-icon" icon="palette" />
              <span class="nav-item-label">Damage Indicator</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <font-awesome-icon class="nav-item-icon" icon="sort-amount-down" />
              <span class="nav-item-label">Replay Sorter</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <font-awesome-icon class="nav-item-icon" icon="table-tennis" />
              <span class="nav-item-label">Ping Test</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="container">
      <transition
        name="router-anim"
        leave-active-class="animated fadeOut faster"
      >
        <router-view />
      </transition>
    </div>
    <div class="footer"></div>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Gotham";
  src: "assets/fonts/GothamLight.woff";
}
@font-face {
  font-family: "Gotham";
  src: "assets/fonts/GothamBold.woff";
  font-weight: bold;
}
@font-face {
  font-family: "Gotham";
  src: "assets/fonts/GothamLightItalic.woff";
  font-style: italic;
}
@font-face {
  font-family: "Gotham";
  src: "assets/fonts/GothamBoldItalic.woff";
  font-weight: bold;
  font-style: italic;
}

@import "../node_modules/material-design-icons-iconfont/dist/material-design-icons.css";
@import "../src/assets/css/animate.css";

@import "../src/assets/css/main.scss";
</style>