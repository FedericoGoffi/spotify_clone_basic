/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {},
	},
	plugins: [
	  function ({ addUtilities }) {
		const newUtilities = {
		  '.scrollbar-custom': {
			'&::-webkit-scrollbar': {
			  width: '6px',
			  height: '6px',
			},
			'&::-webkit-scrollbar-thumb': {
			  background: 'rgba(255, 255, 255, 0.2)',
			  borderRadius: '3px',
			},
			'&::-webkit-scrollbar-thumb:hover': {
			  background: 'rgba(255, 255, 255, 0.4)',
			},
			'&::-webkit-scrollbar-button': {
			  display: 'none',
			},
		  },
		  '.scrollbar-hidden': {
			'&::-webkit-scrollbar': {
			  display: 'none',
			},
		  },
		};
  
		addUtilities(newUtilities);
	  },
	],
  };
  