<script lang="ts">
	import type { ITodo, ITodoBase } from '$lib/types';

	import Icon from '$components/Icon.svelte';
	import IconDefinitions from '$components/IconDefinitions.svelte';
	import ModalTodo from '$components/ModalTodo.svelte';
	import Todo from '$components/Todo.svelte';
	import { createTodo, createTodoBase } from '$/lib/utils/initializers';

	let showModal = false;
	let newTodo: ITodo | ITodoBase = createTodoBase();
	let todos: Array<ITodo> = [];

	const handleModalSubmit = (event: Event) => {
		if ('UUID' in newTodo) {
			const id = newTodo.UUID;
			todos = todos.map((todo) => {
				if (todo.UUID === id) {
					return { ...newTodo, updated_at: Date.now() } as ITodo;
				}
				return todo;
			});
		} else {
			todos = [...todos, createTodo(newTodo)];
		}
		newTodo = createTodoBase();
		showModal = false;
	};

	const handleModalClose = (event: Event) => {
		newTodo = createTodoBase();
		showModal = false;
	};

	const handleTodoRemove = (event: CustomEvent<string>) => {
		todos = todos.filter((todo) => todo.UUID !== event.detail);
	};

	const handleTodoEdit = (event: CustomEvent<ITodo>) => {
		newTodo = event.detail;
		showModal = true;
	};
</script>

<form on:submit|preventDefault={(e) => (showModal = true)} class="form-container">
	<input
		type="text"
		class="title-input-main"
		placeholder="Name a new todo..."
		bind:value={newTodo.title}
	/>
	<button type="submit" class="input-submit">
		<Icon name="plus" />
	</button>
</form>

<div class="todos">
	{#each todos as todo (todo.UUID)}
		<Todo {todo} on:edit={handleTodoEdit} on:remove={handleTodoRemove} />
	{:else}
		<p>I see no TODOs? 🧐</p>
	{/each}
</div>

{#if showModal}
	<ModalTodo {newTodo} on:close={handleModalClose} on:submit={handleModalSubmit} />
{/if}

<IconDefinitions />

<style>
	.todos {
		display: flex;
		flex-direction: column;
	}
</style>
