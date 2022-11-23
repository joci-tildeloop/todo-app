import type { ITodo, ITodoBase, ITag } from '$lib/types';

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

export const createTag = (title: string): ITag => {
	return {
		UUID: crypto.randomUUID(),
		title: title
	};
};
