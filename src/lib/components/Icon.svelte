<script lang="ts">
	export let name: string;
</script>

<svg class="icon icon-{name}"><use xlink:href="#icon-{name}" /></svg>

<style lang="scss">
	.icon {
		display: inline-block;
		width: 1em;
		height: 1em;
		stroke-width: 0;
		stroke: currentColor;
		fill: currentColor;
	}
</style>
