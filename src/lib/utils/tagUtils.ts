import type { ITag } from '$lib/types';

export const createTag = (title: string): ITag => {
	return {
		UUID: crypto.randomUUID(),
		title: title
	};
};
