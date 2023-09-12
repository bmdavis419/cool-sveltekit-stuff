// @ts-check
import { join } from 'path';

import { skeleton } from '@skeletonlabs/tw-plugin';

import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},
	plugins: [
		skeleton({
			themes: { preset: ['rocket', 'wintry', 'skeleton', 'crimson', 'gold-nouveau'] }
		}),
		forms
	]
};
