module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	dark: 'class',
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	theme: {
		colors: {
			primary: '#047857',
			secondary: '#5A8877',
			yellow: '#FFE141',
		},
		extend: {
			fontFamily: {
				DMSans: ['"DMSans"'],
			},
			backgroundImage: {
				'hero-pattern': "url('./Assets/img/pattern/travel-pattern-2.png')",
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
