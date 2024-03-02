/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        'custom-gray': '#0d1117',
				'custom-white': '#f6f8fa',
				'custom-accent': '#55d699',
				'custom-accent-2': '#fbbd04',
				'custom-accent-3': '#2f81f7',
      },
			typography: (theme) => ({
        DEFAULT: {
          css: {
						maxWidth: 'none', // Remove the max-width restriction
            color: theme('colors.black'), // Fallback to currentColor if black is not found
            fontFamily: theme('fontFamily.mono').join(', '),
						fontSize: theme('fontSize.sm'), // Sets the font size to small
            letterSpacing: theme('letterSpacing.tight'), // Sets letter spacing to tight
						lineHeight: theme('lineHeight.normal'), // Sets line height to normal
            WebkitFontSmoothing: 'antialiased', // Enables antialiasing on Webkit browsers
            MozOsxFontSmoothing: 'grayscale', // Improves text rendering on Firefox on macOS
            // Apply additional styles as needed
						hr: {
              borderColor: theme('colors.gray.300'), // Use a color from your theme
              // Or use a custom color directly, e.g., borderColor: '#ff0000',
            },
						a: {
              '&:hover': {
                color: theme('colors.custom-accent-3'), // Hover state color
              },
            },
						figcaption: {
							color: theme('colors.black'),
						},
          },
        },
        dark: {
          css: {
            color: theme('colors.white'), // Ensures base text color is white in dark mode
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.white'), // Makes all headings white in dark mode
            },
            strong: {
              color: theme('colors.white'), // Makes bold text white in dark mode
            },
            'blockquote p, li, a, th, figcaption': {
              color: theme('colors.white'), // Example: Adjusts specific elements like blockquotes, list items, and links
            },
            code: {
              color: theme('colors.white'), // Makes inline code text white in dark mode
            },
            'pre code': { // Targeting code within <pre> blocks if needed
              color: theme('colors.white'), // Ensures code blocks are also styled appropriately
            },
						a: {
              '&:hover': {
                color: theme('colors.custom-accent-3'), // Hover state color
              },
            },
          },
        },
      }),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
	darkMode: 'class',
}
