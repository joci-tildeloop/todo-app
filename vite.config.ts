import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: [
			{
				find: '$',
				replacement: path.resolve(__dirname, 'src')
			},
			{
				find: '$components',
				replacement: path.resolve(__dirname, 'src/lib/components')
			}
		]
	}
};

export default config;
