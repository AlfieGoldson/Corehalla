<template>
	<div class="home page">
		<div class="header">
			<div class="header-bg"></div>
			<div class="title">
				<span class="player-name">Corehalla</span>
				<span class="player-level">Rankings • Statistics • Wiki</span>
				<span class="player-time-played">▼ Join the community and help develop Corehalla! ▼</span>
				<ul class="social-icons">
					<a :href="social.twitter" target="_blank">
						<font-awesome-icon class="social-icon" :icon="['fab', 'twitter']" />
					</a>
					<a :href="social.discord" target="_blank">
						<font-awesome-icon class="social-icon" :icon="['fab', 'discord']" />
					</a>
					<a :href="social.patreon" target="_blank">
						<font-awesome-icon class="social-icon" :icon="['fab', 'patreon']" />
					</a>
					<a :href="social.githubWebsite" target="_blank">
						<font-awesome-icon class="social-icon" :icon="['fab', 'github']" />
					</a>
					<a :href="social.githubNPMModule" target="_blank">
						<font-awesome-icon class="social-icon" :icon="['fab', 'node-js']" />
					</a>
					<a :href="social.githubWiki" target="_blank">
						<font-awesome-icon class="social-icon" icon="book" />
					</a>
					<a :href="social.trello" target="_blank">
						<font-awesome-icon class="social-icon" :icon="['fab', 'trello']" />
					</a>
				</ul>
			</div>
		</div>
        <vue-markdown>
# COREHALLA
## About Corehalla
### What is Corehalla
Corehalla.com is a Community maintained statistics/rankings website and wiki for the game Brawlhalla.<br>
        </vue-markdown>
  </div>
</template>

<script>
	export default {
  name: 'home',
  computed: {
    social() {
      return this.$store.state.social;
    }
  },
}
</script>

<style lang="scss" scoped>
	.header-bg {
		background-image: url("../assets/imgs/backgrounds/jhala-wallpaper.png");
	}
</style>