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
				// Revolutionary Color System
				quantum: {
					50: 'hsl(199, 89%, 95%)',
					100: 'hsl(199, 89%, 85%)',
					200: 'hsl(199, 89%, 75%)',
					300: 'hsl(199, 89%, 65%)',
					400: 'hsl(199, 89%, 55%)',
					500: 'hsl(var(--quantum-blue))',
					600: 'hsl(var(--quantum-blue-dark))',
					700: 'hsl(199, 89%, 25%)',
					800: 'hsl(199, 89%, 15%)',
					900: 'hsl(199, 89%, 8%)',
				},
				cyber: {
					50: 'hsl(174, 72%, 95%)',
					100: 'hsl(174, 72%, 85%)',
					200: 'hsl(174, 72%, 75%)',
					300: 'hsl(174, 72%, 65%)',
					400: 'hsl(174, 72%, 55%)',
					500: 'hsl(var(--cyber-teal))',
					600: 'hsl(var(--cyber-teal-dark))',
					700: 'hsl(174, 72%, 32%)',
					800: 'hsl(174, 72%, 22%)',
					900: 'hsl(174, 72%, 12%)',
				},
				neural: {
					50: 'hsl(24, 95%, 95%)',
					100: 'hsl(24, 95%, 85%)',
					200: 'hsl(24, 95%, 75%)',
					300: 'hsl(24, 95%, 65%)',
					400: 'hsl(24, 95%, 55%)',
					500: 'hsl(var(--neural-orange))',
					600: 'hsl(var(--neural-orange-dark))',
					700: 'hsl(24, 95%, 29%)',
					800: 'hsl(24, 95%, 19%)',
					900: 'hsl(24, 95%, 9%)',
				},
				matrix: {
					50: 'hsl(142, 76%, 95%)',
					100: 'hsl(142, 76%, 85%)',
					200: 'hsl(142, 76%, 75%)',
					300: 'hsl(142, 76%, 65%)',
					400: 'hsl(142, 76%, 55%)',
					500: 'hsl(var(--matrix-green))',
					600: 'hsl(var(--matrix-green-dark))',
					700: 'hsl(142, 76%, 16%)',
					800: 'hsl(142, 76%, 11%)',
					900: 'hsl(142, 76%, 6%)',
				},
				void: {
					50: 'hsl(210, 6%, 95%)',
					100: 'hsl(210, 6%, 85%)',
					200: 'hsl(210, 6%, 75%)',
					300: 'hsl(210, 6%, 65%)',
					400: 'hsl(210, 6%, 55%)',
					500: 'hsl(210, 6%, 45%)',
					600: 'hsl(210, 6%, 35%)',
					700: 'hsl(210, 6%, 25%)',
					800: 'hsl(var(--void-gray-light))',
					900: 'hsl(var(--void-gray))',
				},
				surface: {
					white: 'hsl(var(--surface-white))',
					cream: 'hsl(var(--surface-cream))',
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
				// Revolutionary Animations
				'quantum-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--quantum-blue) / 0.3)',
						transform: 'scale(1)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--quantum-blue) / 0.6)',
						transform: 'scale(1.02)'
					}
				},
				'neural-sweep': {
					'0%': { left: '-100%' },
					'50%': { left: '100%' },
					'100%': { left: '100%' }
				},
				'holo-shift': {
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
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(var(--cyber-teal) / 0.4)' 
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(var(--cyber-teal) / 0.8)' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// Revolutionary Animations
				'quantum-pulse': 'quantum-pulse 2s ease-in-out infinite',
				'neural-sweep': 'neural-sweep 3s infinite',
				'holo-shift': 'holo-shift 4s ease-in-out infinite',
				'orbital': 'orbital 20s linear infinite',
				'morphic-float': 'morphic-float 8s ease-in-out infinite',
				'data-stream': 'data-stream 4s linear infinite',
				'levitate': 'levitate 3s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'quantum-mesh': 'radial-gradient(circle at 25px 25px, hsl(var(--quantum-blue) / 0.1) 2px, transparent 2px), radial-gradient(circle at 75px 75px, hsl(var(--cyber-teal) / 0.1) 2px, transparent 2px)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
