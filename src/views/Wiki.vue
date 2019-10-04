<template>
	<div class="wiki page">
		<div class="header">
			<div class="header-bg"></div>
			<div class="title">
				<span class="player-name">Wiki</span>
				<span class="player-level">--</span>
				<span class="player-time-played">▼ Help complete the wiki! ▼</span>
				<ul class="social-icons">
					<a :href="social.discord" target="_blank">
						<font-awesome-icon class="social-icon" :icon="['fab', 'discord']" />
					</a>
					<a :href="social.githubWebsite" target="_blank">
						<font-awesome-icon class="social-icon" :icon="['fab', 'github']" />
					</a>
				</ul>
			</div>
		</div>
		<vue-markdown>{{ pageMarkdown }}</vue-markdown>
	</div>
</template>

<script>
	export default {
    name: 'wiki',
    computed: {
        social() {
            return this.$store.state.social;
        },
        pageMarkdown() {
            return this.$store.getters.getCurrentWikiPage;
        }
    },
    beforeRouteUpdate(to, from, next) {
        this.$store.dispatch('changeWikiPage');
        next();
    },
    mounted() {
		this.$store.dispatch('changeWikiPage');
    }
}
</script>

<style lang="scss" scoped>
	.header-bg {
		background-image: url("../assets/imgs/backgrounds/ulgrim-wallpaper.png");
	}
</style>