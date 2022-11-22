<script lang="ts">
	import type { ITodo } from '$lib/types';

	import Icon from '$components/Icon.svelte';
	import IconDefinitions from '$components/IconDefinitions.svelte';
	import Modal from '$components/Modal.svelte';
	import Todo from '$components/Todo.svelte';
	import { createTodo, createTodoBase } from '$/lib/utils/todoUtils';
	import { createTag } from '$/lib/utils/tagUtils';

	let showModal = false;
	let showTagInput = false;
	let newTag = '';
	let newTodoBase = createTodoBase();
	let todos: Array<ITodo> = [];

	const handleSubmit = (event: Event) => {
		todos = [...todos, createTodo(newTodoBase)];
		newTodoBase = createTodoBase();
		showModal = false;
	};

	const handleClose = (event: Event) => {
		newTodoBase = createTodoBase();
		showModal = false;
	};

	const addTag = (event: Event) => {
		newTodoBase.tags = [...newTodoBase.tags, createTag(newTag)];
		newTag = '';
		showTagInput = false;
	};
</script>

<form on:submit|preventDefault={(e) => (showModal = true)} class="form-container">
	<input
		type="text"
		class="title-input-main"
		placeholder="Name a new todo..."
		bind:value={newTodoBase.title}
	/>
	<button type="submit" class="input-submit">
		<Icon name="plus" />
	</button>
</form>

<div class="todos">
	{#each todos as todo (todo.UUID)}
		<Todo {todo} />
	{:else}
		<p>Add some tasks!</p>
	{/each}
</div>

{#if showModal}
	<Modal on:close={handleClose}>
		<h2>Create a todo</h2>
		<hr />
		<span>
			<label for="modal-input-title">Title: </label>
			<input type="text" id="modal-input-title" bind:value={newTodoBase.title} />
		</span>
		<span>
			<label for="modal-input-description">Description: </label>
			<input type="textarea" id="modal-input-description" bind:value={newTodoBase.description} />
		</span>
		<span>
			<label for="modal-input-reward">Reward: </label>
			<input type="number" class="modal-input-reward" bind:value={newTodoBase.reward} />
		</span>
		<span>
			<label for="tag-container">
				<Icon name="label" />
			</label>
			<div id="tag-container">
				{#each newTodoBase.tags as tag (tag.UUID)}
					<div class="pill">{tag.title}</div>
				{/each}
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
			</div>
		</span>
		<button on:click={handleSubmit}> Submit </button>
	</Modal>
{/if}

<IconDefinitions />

<style>
	/* your styles go here */
</style>
