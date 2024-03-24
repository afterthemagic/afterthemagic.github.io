/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
},

/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
	  colors: {
		'accent-1': '#DAAC39',
		'accent-2': '#DABB5F',
		'accent-3': '#DACA9A',
		'main-1': '#889639',
		'main-2': '#9EAD41',
		'background-1': '#121000',
		'background-2': '#161700',
		'background-3': '#1B1C00',
	  }
	}
  }