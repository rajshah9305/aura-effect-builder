
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
				// Sophisticated Black & White System
				mono: {
					50: 'hsl(0, 0%, 98%)',
					100: 'hsl(0, 0%, 95%)',
					200: 'hsl(0, 0%, 88%)',
					300: 'hsl(0, 0%, 78%)',
					400: 'hsl(0, 0%, 65%)',
					500: 'hsl(0, 0%, 50%)',
					600: 'hsl(0, 0%, 35%)',
					700: 'hsl(0, 0%, 22%)',
					800: 'hsl(0, 0%, 12%)',
					900: 'hsl(0, 0%, 5%)',
				},
				subtle: {
					50: 'hsl(210, 8%, 98%)',
					100: 'hsl(210, 8%, 95%)',
					200: 'hsl(210, 8%, 88%)',
					300: 'hsl(210, 8%, 78%)',
					400: 'hsl(210, 8%, 65%)',
					500: 'hsl(210, 8%, 50%)',
					600: 'hsl(210, 8%, 35%)',
					700: 'hsl(210, 8%, 22%)',
					800: 'hsl(210, 8%, 12%)',
					900: 'hsl(210, 8%, 5%)',
				},
				surface: {
					white: 'hsl(0, 0%, 100%)',
					cream: 'hsl(0, 0%, 98%)',
					light: 'hsl(0, 0%, 95%)',
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
				// Monochromatic Animations
				'mono-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
						transform: 'scale(1)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(0, 0, 0, 0.2)',
						transform: 'scale(1.02)'
					}
				},
				'gradient-sweep': {
					'0%': { left: '-100%' },
					'50%': { left: '100%' },
					'100%': { left: '100%' }
				},
				'mono-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'orbital': {
					'from': { transform: 'rotate(0deg)' },
					'to': { transform: 'rotate(360deg)' }
				},
				'morphic-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)',
						borderRadius: '20% 80% 30% 70%'
					},
					'25%': { 
						transform: 'translateY(-20px) rotate(90deg)',
						borderRadius: '70% 30% 80% 20%'
					},
					'50%': { 
						transform: 'translateY(-10px) rotate(180deg)',
						borderRadius: '30% 70% 20% 80%'
					},
					'75%': { 
						transform: 'translateY(-30px) rotate(270deg)',
						borderRadius: '80% 20% 70% 30%'
					}
				},
				'data-stream': {
					'0%': { 
						transform: 'translateX(-100px) translateY(0px)',
						opacity: '0'
					},
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { 
						transform: 'translateX(calc(100vw + 100px)) translateY(-50px)',
						opacity: '0'
					}
				},
				'levitate': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'subtle-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)' 
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(0, 0, 0, 0.1)' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// Monochromatic Animations
				'mono-pulse': 'mono-pulse 2s ease-in-out infinite',
				'gradient-sweep': 'gradient-sweep 3s infinite',
				'mono-shift': 'mono-shift 4s ease-in-out infinite',
				'orbital': 'orbital 20s linear infinite',
				'morphic-float': 'morphic-float 8s ease-in-out infinite',
				'data-stream': 'data-stream 4s linear infinite',
				'levitate': 'levitate 3s ease-in-out infinite',
				'subtle-glow': 'subtle-glow 2s ease-in-out infinite alternate',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'mono-mesh': 'radial-gradient(circle at 25px 25px, rgba(0, 0, 0, 0.02) 2px, transparent 2px), radial-gradient(circle at 75px 75px, rgba(0, 0, 0, 0.01) 2px, transparent 2px)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
