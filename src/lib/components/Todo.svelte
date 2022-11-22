<script lang="ts">
	import type { ITodo } from '$lib/types';
	import Icon from '$components/Icon.svelte';
	export let todo: ITodo;
</script>

<h2>Create a todo</h2>
<hr />
<span>
	Title: {todo.title}
</span>
<span>
	Reward: {todo.reward}
</span>
<span>
	Description: {todo.description}
</span>
<span>
	<label for="tag-container">
		<Icon name="label" />
	</label>
	<div id="tag-container">
		{#each todo.tags as tag (tag.UUID)}
			<div class="pill">{tag.title}</div>
		{/each}
	</div>
</span>

<!-- markup (zero or more items) goes here -->
<style>
	/* your styles go here */
</style>
