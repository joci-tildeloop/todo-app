import type { ITodo, ITodoBase } from '$lib/types';

export const createTodo = (todoBase: ITodoBase): ITodo => {
	return {
		...todoBase,
		UUID: crypto.randomUUID(),
		updated_at: Date.now()
	};
};

export const createTodoBase = (): ITodoBase => {
	return {
		title: '',
		description: '',
		reward: 0,
		tags: []
	};
};
