/*** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	 
		// Or if using `src` directory:
		//"./src/**/*.{js,ts,jsx,tsx}",
	  ],
  theme: {
		colors: {
			"rosyblack": "	#594a4e",
			"rosy": "	#594a4e",
			"rosylight": "#cb8b8d",
			"rosydim": "#F3F3F3",
			"rosypink": "#eab3b7",
			"rosywhite": "	#f1d7d8",
			white: "#fff",
		},
		fontFamily: {
			sans: ["Georgia", "sans-serif"],
			serif: ["Merriweather", "serif"],
			display: ["Oswald"],
		},
		fontSize: {
			sm: "0.8rem",
			base: "1rem",
			lg: "1.15rem",
			xl: "1.25rem",
			"2xl": "1.563rem",
			"3xl": "1.953rem",
			"4xl": "2.441rem",
			"5xl": "3.052rem",
			"6xl": "3.5rem",
		},
		extend: {
		fontFamily:{
			head1Main:["'Courgette', cursive"],
			head2Main:["'Barlow Condensed', sans-serif"],
			navFont:["'MonteCarlo', cursive"],
		}
		
	},
		
	},
	plugins: [],
};
