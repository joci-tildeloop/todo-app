<script lang="ts">
	import Icon from '$components/Icon.svelte';
	import IconDefinitions from '$components/IconDefinitions.svelte';

	let input: string;
	const handleSubmit = (event: Event) => {
		console.log('asdf');
	};
</script>

<form on:submit|preventDefault={handleSubmit} class="form-container">
	<input type="text" class="input-text" placeholder="Add todo..." bind:value={input} />
	<button type="submit" class="input-submit">
		<Icon name="plus" />
	</button>
</form>

<IconDefinitions />

<style>
	/* your styles go here */
</style>
