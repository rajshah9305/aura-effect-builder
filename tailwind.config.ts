
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Professional High-Contrast System
				mono: {
					50: 'hsl(0, 0%, 98%)',
					100: 'hsl(0, 0%, 96%)',
					200: 'hsl(0, 0%, 90%)',
					300: 'hsl(0, 0%, 80%)',
					400: 'hsl(0, 0%, 65%)',
					500: 'hsl(0, 0%, 50%)',
					600: 'hsl(0, 0%, 35%)',
					700: 'hsl(0, 0%, 25%)',
					800: 'hsl(0, 0%, 15%)',
					900: 'hsl(0, 0%, 8%)',
				},
				surface: {
					white: 'hsl(0, 0%, 100%)',
					cream: 'hsl(0, 0%, 99%)',
					light: 'hsl(0, 0%, 97%)',
					charcoal: 'hsl(0, 0%, 20%)',
					dark: 'hsl(0, 0%, 8%)',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				// Professional High-Contrast Animations
				'bright-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
						transform: 'scale(1)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(0, 0, 0, 0.2)',
						transform: 'scale(1.02)'
					}
				},
				'shine-sweep': {
					'0%': { left: '-100%' },
					'50%': { left: '100%' },
					'100%': { left: '100%' }
				},
				'contrast-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'orbital': {
					'from': { transform: 'rotate(0deg)' },
					'to': { transform: 'rotate(360deg)' }
				},
				'float-clean': {
					'0%, 100%': { 
						transform: 'translateY(0px)',
						opacity: '0.8'
					},
					'50%': { 
						transform: 'translateY(-10px)',
						opacity: '1'
					}
				},
				'data-flow': {
					'0%': { 
						transform: 'translateX(-100px) translateY(0px)',
						opacity: '0'
					},
					'10%': { opacity: '0.6' },
					'90%': { opacity: '0.6' },
					'100%': { 
						transform: 'translateX(calc(100vw + 100px)) translateY(-20px)',
						opacity: '0'
					}
				},
				'elevate': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'soft-glow': {
					'0%, 100%': { 
						boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' 
					},
					'50%': { 
						boxShadow: '0 8px 40px rgba(0, 0, 0, 0.1)' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// Professional High-Contrast Animations
				'bright-pulse': 'bright-pulse 2s ease-in-out infinite',
				'shine-sweep': 'shine-sweep 3s infinite',
				'contrast-shift': 'contrast-shift 4s ease-in-out infinite',
				'orbital': 'orbital 20s linear infinite',
				'float-clean': 'float-clean 4s ease-in-out infinite',
				'data-flow': 'data-flow 4s linear infinite',
				'elevate': 'elevate 3s ease-in-out infinite',
				'soft-glow': 'soft-glow 2s ease-in-out infinite alternate',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'subtle-pattern': 'radial-gradient(circle at 25px 25px, rgba(0, 0, 0, 0.01) 1px, transparent 1px), radial-gradient(circle at 75px 75px, rgba(0, 0, 0, 0.005) 1px, transparent 1px)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
