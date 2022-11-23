export interface ITodoBase {
	title: string;
	description: string;
	reward: number;
	tags: Array<number>;
}

export interface ITodo extends ITodoBase {
	UUID: string;
	updated_at: number;
}

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

let newTodo: ITodo | ITodoBase;

const rand = Math.floor(Math.random());

if (rand % 2 == 0) {
	newTodo = createTodo(createTodoBase());
} else {
	newTodo = createTodoBase();
}

if ('UUID' in newTodo) {
	newTodo.UUID;
} else {
	newTodo;
}
