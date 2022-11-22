export interface ITodoBase {
	title: string;
	description: string;
	reward: number;
	tags: Array<ITag>;
}

export interface ITodo extends ITodoBase {
	UUID: string;
	updated_at: number;
}

export interface ITag {
	UUID: string;
	title: string;
}
