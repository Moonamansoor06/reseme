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
			"rosyblack": "#594a4e",
			"rosy": "#594a4e",
			"rosylight": "#cb8b8d",
			"rosydim": "#F3F3F3",
			"rosypink": "#eab3b7",
			"rosywhite": "#f1d7d8",
			white: "#fff",
			gray:"#f8f8fa"
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
		},
		keyframes: {
			wave: {
			  '0%': { transform: 'rotate(0.0deg)' },
			  '10%': { transform: 'rotate(14deg)' },
			  '20%': { transform: 'rotate(-8deg)' },
			  '30%': { transform: 'rotate(14deg)' },
			  '40%': { transform: 'rotate(-4deg)' },
			  '50%': { transform: 'rotate(10.0deg)' },
			  '60%': { transform: 'rotate(0.0deg)' },
			  '100%': { transform: 'rotate(0.0deg)' },
			},
		  
		   type: {
			to: {
			  width: '22ch'
			}
		  },
		  
		 blink :{
			'0%': {
			  bordercolor: 'transparent'
			},
			'100%': {
			  bordercolor: 'transparent'
			},
		  
			'50%': {
			  bordercolor: '#000'
			}
		  },
		
	},
		
		},	
	},		
	plugins: [],
};
