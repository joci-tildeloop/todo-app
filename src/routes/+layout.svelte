<script>
	import Icon from '$components/Icon.svelte';
</script>

<header>
	<div class="header-title">
		<a class="header-link" href="/"> Todo App </a>
	</div>

	<div class="header-options">
		<a class="header-link" href="https://www.linkedin.com/in/therealjoci">
			<Icon name="github" />
		</a>
	</div>
</header>

<slot />

<style lang="scss">
	header {
		justify-content: space-between;
		display: flex;

		a {
			font-size: 1.6rem;
			font-weight: bold;
			text-decoration: none;
			color: black;
		}
	}
</style>
