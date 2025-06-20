
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
				// Subtle Professional Palette
				slate: {
					50: 'hsl(210, 40%, 98%)',
					100: 'hsl(210, 40%, 96%)',
					200: 'hsl(214, 32%, 91%)',
					300: 'hsl(213, 27%, 84%)',
					400: 'hsl(215, 20%, 65%)',
					500: 'hsl(215, 16%, 47%)',
					600: 'hsl(215, 19%, 35%)',
					700: 'hsl(215, 25%, 27%)',
					800: 'hsl(217, 33%, 17%)',
					900: 'hsl(222, 47%, 11%)',
				},
				neutral: {
					50: 'hsl(0, 0%, 98%)',
					100: 'hsl(0, 0%, 96%)',
					200: 'hsl(0, 0%, 90%)',
					300: 'hsl(0, 0%, 83%)',
					400: 'hsl(0, 0%, 64%)',
					500: 'hsl(0, 0%, 45%)',
					600: 'hsl(0, 0%, 32%)',
					700: 'hsl(0, 0%, 25%)',
					800: 'hsl(0, 0%, 15%)',
					900: 'hsl(0, 0%, 9%)',
				},
				surface: {
					white: 'hsl(0, 0%, 100%)',
					pearl: 'hsl(0, 0%, 99%)',
					cream: 'hsl(45, 25%, 97%)',
					light: 'hsl(210, 17%, 95%)',
					soft: 'hsl(210, 17%, 93%)',
					medium: 'hsl(215, 16%, 47%)',
					dark: 'hsl(217, 33%, 17%)',
				},
				// Subtle accent for engagement
				accent: {
					blue: 'hsl(210, 100%, 97%)',
					'blue-soft': 'hsl(210, 40%, 92%)',
					'blue-medium': 'hsl(210, 40%, 85%)',
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
				// Subtle Professional Animations
				'gentle-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.05)',
						transform: 'scale(1)'
					},
					'50%': {
						boxShadow: '0 0 0 8px rgba(59, 130, 246, 0)',
						transform: 'scale(1.01)'
					}
				},
				'subtle-glow': {
					'0%, 100%': { 
						boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' 
					},
					'50%': { 
						boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)' 
					}
				},
				'soft-float': {
					'0%, 100%': { 
						transform: 'translateY(0px)',
						opacity: '1'
					},
					'50%': { 
						transform: 'translateY(-6px)',
						opacity: '0.9'
					}
				},
				'elegant-slide': {
					'0%': { 
						transform: 'translateX(-20px)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateX(0px)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gentle-pulse': 'gentle-pulse 3s ease-in-out infinite',
				'subtle-glow': 'subtle-glow 4s ease-in-out infinite alternate',
				'soft-float': 'soft-float 6s ease-in-out infinite',
				'elegant-slide': 'elegant-slide 0.6s ease-out',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'subtle-texture': 'radial-gradient(circle at 20px 20px, rgba(0, 0, 0, 0.01) 1px, transparent 1px)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
