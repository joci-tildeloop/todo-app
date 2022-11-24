<script lang="ts">
	import type { ITodo, ITodoBase } from '$lib/types';

	import { createEventDispatcher, onMount } from 'svelte';
	import { createTag } from '$/lib/utils/initializers';
	import Modal from '$components/Modal.svelte';
	import TagContainer from '$components/TagContainer.svelte';
	import { selectInputText } from '$/lib/utils/eventHandlers';

	export let tempTodo: ITodo | ITodoBase;

	const dispatch = createEventDispatcher();

	const addTag = (event: CustomEvent<string>) => {
		tempTodo.tags = [...tempTodo.tags, createTag(event.detail)];
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
		<input
			type="text"
			id="modal-input-title"
			bind:value={tempTodo.title}
			on:focus={selectInputText}
		/>
	</span>
	<span>
		<label for="modal-input-description">Description: </label>
		<input
			type="textarea"
			id="modal-input-description"
			bind:value={tempTodo.description}
			on:focus={selectInputText}
		/>
	</span>
	<span>
		<label for="modal-input-reward">Reward: </label>
		<input
			type="number"
			class="modal-input-reward"
			bind:value={tempTodo.reward}
			on:focus={selectInputText}
		/>
	</span>
	<span>
		<TagContainer tags={tempTodo.tags} extendable={true} on:extend={addTag} />
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
