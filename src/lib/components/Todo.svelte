<script lang="ts">
	import type { ITodo } from '$lib/types';
	import Icon from '$components/Icon.svelte';
	import TagContainer from '$components/TagContainer.svelte';
	import { createEventDispatcher } from 'svelte';

	export let todo: ITodo;

	const dispatch = createEventDispatcher<{ edit: ITodo; remove: string }>();
</script>

<div class="todo-container">
	<div class="items-container">
		<span>
			Title: {todo.title}
		</span>
		<span>
			Reward: {todo.reward}
		</span>
		<span>
			Description: {todo.description}
		</span>
		<TagContainer tags={todo.tags} />
	</div>

	<div class="controls-container">
		<button on:click={() => dispatch('edit', todo)}><Icon name="pencil" /> </button>
		<button on:click={() => dispatch('remove', todo.UUID)}><Icon name="bin" /></button>
	</div>
</div>

<style>
	.items-container {
		display: flex;
		flex-direction: column;
		float: left;
	}

	.controls-container {
		float: right;
		display: flex;
		flex-direction: row;
	}
</style>
