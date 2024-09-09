/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				unisonBold:['Unison Pro Bold','sans-serif'],
				unisonBoldIthalic:['Unison Pro Bold Italic','sans-serif'],
				unisonIthalic:['Unison Pro Light Italic','sans-serif'],
				unisonLight:['Unison Pro Light','sans-serif'],
				unisonLightRound:['Unison Pro Light Round','sans-serif']
			  },
		},
	},
	plugins: [],
}
