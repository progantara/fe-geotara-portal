/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	theme: {
		colors: {
			primary: '#047857',
		},
		extend: {
			fontFamily: {
				DMSans: ['"DMSans"'],
			},
			backgroundImage: {
				'hero-pattern': "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('./Assets/img/pattern/travel-pattern-2.png')",
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
