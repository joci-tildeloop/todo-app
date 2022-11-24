<script lang="ts">
	import type { ITodo, ITodoBase } from '$lib/types';

	import { createEventDispatcher } from 'svelte';
	import { createTag } from '$/lib/utils/initializers';
	import Modal from '$components/Modal.svelte';
	import TagContainer from '$components/TagContainer.svelte';

	export let tempTodo: ITodo | ITodoBase;

	let newTag = '';
	let showTagInput = false;

	const dispatch = createEventDispatcher();

	const addTag = (event: Event) => {
		tempTodo.tags = [...tempTodo.tags, createTag(newTag)];
		newTag = '';
		showTagInput = false;
	};
</script>

<Modal
	on:close={() => {
		dispatch('close');
	}}
>
	<h2>Create a todo:</h2>
	<hr />
	<span>
		<label for="modal-input-title">Title: </label>
		<input type="text" id="modal-input-title" bind:value={tempTodo.title} />
	</span>
	<span>
		<label for="modal-input-description">Description: </label>
		<input type="textarea" id="modal-input-description" bind:value={tempTodo.description} />
	</span>
	<span>
		<label for="modal-input-reward">Reward: </label>
		<input type="number" class="modal-input-reward" bind:value={tempTodo.reward} />
	</span>
	<span>
		<TagContainer tags={tempTodo.tags}>
			{#if showTagInput}
				<form on:submit|preventDefault={addTag}>
					<!-- svelte-ignore a11y-autofocus -->
					<input autofocus type="text" class="modal-input-tag" bind:value={newTag} />
				</form>
			{:else}
				<button type="text" class="modal-add-tag" on:click={(e) => (showTagInput = true)}>
					Add tag
				</button>
			{/if}
		</TagContainer>
	</span>
	<button
		on:click={() => {
			dispatch('submit');
		}}
	>
		Submit
	</button>
</Modal>

<style>
	/* your styles go here */
</style>
