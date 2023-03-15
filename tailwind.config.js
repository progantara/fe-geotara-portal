module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
<<<<<<< HEAD
=======
	dark: 'class',
>>>>>>> 7e16235b10a6c55d7e02cb43421bc6bd31bd16ba
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	theme: {
		colors: {
			primary: '#047857',
<<<<<<< HEAD
=======

			secondary: '#5A8877',
			yellow: '#FFE141',
>>>>>>> 7e16235b10a6c55d7e02cb43421bc6bd31bd16ba
		},
		extend: {
			fontFamily: {
				DMSans: ['"DMSans"'],
			},
			backgroundImage: {
<<<<<<< HEAD
				'hero-pattern': "url('./Assets/img/pattern/travel-pattern-2.png')",
=======
				'hero-pattern': "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('./Assets/img/pattern/travel-pattern-2.png')",
>>>>>>> 7e16235b10a6c55d7e02cb43421bc6bd31bd16ba
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};