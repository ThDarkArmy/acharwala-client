/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      // Include any other file paths that might contain Tailwind classes
      "./public/**/*.html",
    ],
    
    // Enable dark mode based on class or media query
    darkMode: 'class', // or 'media' for system preference
    
    theme: {
      extend: {
        colors: {
          // Primary brand colors for pickle theme
          primary: {
            50: '#fef7ee',
            100: '#fdecd6',
            200: '#fbd9a8',
            300: '#f9c17a',
            400: '#f7a94c',
            500: '#f59e0b', // Main brand color
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
          },
          
          // Secondary colors
          secondary: {
            50: '#f0fdf4',
            100: '#dcfce7',
            500: '#22c55e', // Success green
            600: '#16a34a',
            700: '#15803d',
          },
          
          // Neutral colors
          gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
          },
          
          // Semantic colors
          success: {
            50: '#f0fdf4',
            100: '#dcfce7',
            500: '#22c55e',
            600: '#16a34a',
          },
          warning: {
            50: '#fffbeb',
            100: '#fef3c7',
            500: '#f59e0b',
            600: '#d97706',
          },
          error: {
            50: '#fef2f2',
            100: '#fee2e2',
            500: '#ef4444',
            600: '#dc2626',
          },
          info: {
            50: '#eff6ff',
            100: '#dbeafe',
            500: '#3b82f6',
            600: '#2563eb',
          },
        },
        
        // Custom spacing scale
        spacing: {
          '18': '4.5rem',
          '88': '22rem',
          '128': '32rem',
        },
        
        // Custom typography
        fontSize: {
          'xs': ['0.75rem', { lineHeight: '1rem' }],
          'sm': ['0.875rem', { lineHeight: '1.25rem' }],
          'base': ['1rem', { lineHeight: '1.5rem' }],
          'lg': ['1.125rem', { lineHeight: '1.75rem' }],
          'xl': ['1.25rem', { lineHeight: '1.75rem' }],
          '2xl': ['1.5rem', { lineHeight: '2rem' }],
          '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
          '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
          '5xl': ['3rem', { lineHeight: '1' }],
          '6xl': ['3.75rem', { lineHeight: '1' }],
        },
        
        // Custom font families
        fontFamily: {
          sans: [
            'Inter',
            'ui-sans-serif',
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'Noto Sans',
            'sans-serif',
          ],
          serif: [
            'ui-serif',
            'Georgia',
            'Cambria',
            'Times New Roman',
            'Times',
            'serif',
          ],
          mono: [
            'ui-monospace',
            'SFMono-Regular',
            'Menlo',
            'Monaco',
            'Consolas',
            'Liberation Mono',
            'Courier New',
            'monospace',
          ],
        },
        
        // Custom box shadows
        boxShadow: {
          'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
          'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
          '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
          'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
          'none': 'none',
          
          // Custom shadows
          'primary': '0 4px 14px 0 rgb(245 158 11 / 0.2)',
          'primary-lg': '0 10px 25px -3px rgb(245 158 11 / 0.2), 0 4px 6px -4px rgb(245 158 11 / 0.2)',
        },
        
        // Custom border radius
        borderRadius: {
          'sm': '0.125rem',
          'DEFAULT': '0.25rem',
          'md': '0.375rem',
          'lg': '0.5rem',
          'xl': '0.75rem',
          '2xl': '1rem',
          '3xl': '1.5rem',
          'full': '9999px',
        },
        
        // Custom animations and keyframes
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'slide-up': 'slideUp 0.3s ease-out',
          'bounce-light': 'bounce 1s infinite',
          'pulse-slow': 'pulse 3s infinite',
          'spin-slow': 'spin 3s linear infinite',
        },
        
        // keyframes: {
        //   fadeIn: {
        //     '0%': { opacity: '0' },
        //     '100%': { opacity: '1' },
        //   },
        //   slideUp: {
        //     '0%': { transform: 'translateY(10px)', opacity: '0' },
        //     '100%': { transform: 'translateY(0)', opacity: '1' },
        //   },
        // },
        keyframes: {
            fadeIn: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
              },
              slideUp: {
                '0%': { transform: 'translateY(10px)', opacity: '0' },
                '100%': { transform: 'translateY(0)', opacity: '1' },
              },
            'fade-in-down': {
              '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
              },
              '100%': {
                opacity: '1',
                transform: 'translateY(0)'
              },
            }
          },
          animation: {
            'fade-in-down': 'fade-in-down 0.3s ease-out'
          },
        
        // Custom z-index scale
        zIndex: {
          '1': '1',
          '60': '60',
          '70': '70',
          '80': '80',
          '90': '90',
          '100': '100',
        },
        
        // Custom aspect ratios
        aspectRatio: {
          '4/3': '4 / 3',
          '3/2': '3 / 2',
          '2/3': '2 / 3',
          '9/16': '9 / 16',
        },
        
        // Custom background images
        backgroundImage: {
          'gradient-primary': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          'gradient-secondary': 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
          'gradient-gray': 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
          'texture-pickle': "url('@/assets/texture-pickle.png')",
        },
        
        // Custom container padding
        container: {
          padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem',
            '2xl': '6rem',
          },
          center: true,
        },
      },
    },
    
    // Variants configuration
    variants: {
      extend: {
        opacity: ['disabled'],
        backgroundColor: ['active', 'disabled'],
        textColor: ['active', 'disabled'],
        borderColor: ['focus-visible', 'disabled'],
        ringColor: ['focus-visible'],
        ringWidth: ['focus-visible'],
        scale: ['group-hover'],
        animation: ['motion-safe', 'motion-reduce'],
      },
    },
    
    // Core plugins configuration (optional - for optimization)
    corePlugins: {
      // Disable unused core plugins for smaller bundle size
      float: false,
      clear: false,
      skew: false,
      caretColor: false,
      fontVariantNumeric: false,
    },
    
    // Plugins
    plugins: [
      require('@tailwindcss/forms')({
        strategy: 'class', // only generate classes for forms
      }),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/container-queries'),
      
      // Custom plugin for pickle-specific utilities
      function({ addUtilities, theme }) {
        const newUtilities = {
          '.text-shadow': {
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          },
          '.text-shadow-lg': {
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)',
          },
          '.border-gradient': {
            borderImage: 'linear-gradient(135deg, #f59e0b, #d97706) 1',
          },
          '.clip-path-pickle': {
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
          },
        }
        addUtilities(newUtilities, ['responsive', 'hover'])
      }
    ],
    
    // PurgeCSS options for production optimization
    future: {
      hoverOnlyWhenSupported: true,
    },
    
    // Experimental features
    experimental: {
      optimizeUniversalDefaults: true,
    },
  }