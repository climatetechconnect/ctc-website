import type { Config } from "tailwindcss";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/data/**/*.{mdx,json}",
	],
	theme: {
		extend: {
			screens: {
				"3xl": "120rem",
			},
			fontFamily: {
				montserrat: ["var(--font-montserrat)"],
				"sometype-mono": ["var(--font-sometype-mono)"],
			},
			animation: {
				"spin-slow": "spin 6s linear infinite",
				"spin-very-slow": "spin 20s linear infinite",
			},
			colors: {
				blue: {
					600: "#2D38CE",
					400: "#D5EBFF",
					300: "#98AFF2",
				},
				green: {
					800: "#7D7B6A",
					600: "#29E794",
					500: "#B3B697",
					200: "#8E9075",
					100: "#D1F499",
				},
				brown: {
					600: "#624049",
				},
				gray: {
					900: "#000000",
					800: "#171C1F",
					700: "#404042",
					600: "#0A1E25",
					500: "#52575D",
					400: "#CCCCCC",
					300: "#DFDFDF",
					100: "#ECECEC",
					50: "#F8F8F8",
				},
				pink: {
					500: "#FFE1E9",
				},
			},
			textDecorationThickness: {
				1: "0.0625rem",
				2: "0.125rem",
				3: "0.1875rem",
				4: "0.25rem",
				5: "0.3125rem",
			},
			letterSpacing: {
				"3": "0.3125rem",
			},
			fontSize: {
				"4xs": "0.5rem",
				"3xs": "0.625rem",
				"2xs": "0.75rem",
				xs: "0.8125rem",
				sm: "0.875rem",
				md: "0.9375rem",
				"6.5xl": "4.375rem",
				"7xl": "5rem",
				"7.5xl": "5.625rem",
				"8xl": "6.25rem",
			},
			lineHeight: {
				"70": "7.1875",
			},
			maxWidth: {
				"1/2": "50%",
				"86": "22.5rem",
				"100": "27.68rem",
				"8xl": "128rem",
			},
			minHeight: {
				"100": "27.68rem",
			},
			minWidth: {
				"110": "68.75rem",
			},
			height: {
				"7.5": "1.90625rem",
				"18": "4.75rem",
				"22": "5.75rem",
				"30": "7.5rem",
				"200": "35.813rem",
			},
			width: {
				"76": "18.75rem",
			},
			gridTemplateColumns: {
				"3-5-2-5": "3fr 5fr 2fr 5fr",
				"2-3": "2fr 3fr",
			},
		},
	},
	plugins: [aspectRatio],
} satisfies Config;
