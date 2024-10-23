import type { Theme } from '../index.js';

const modern = {
	name: 'modern',
	properties: {
		'--type-scale-factor': '1.25',
		'--type-scale-1': 'calc(0.75rem * var(--type-scale-factor))',
		'--type-scale-2': 'calc(0.875rem * var(--type-scale-factor))',
		'--type-scale-3': 'calc(1rem * var(--type-scale-factor))',
		'--type-scale-4': 'calc(1.125rem * var(--type-scale-factor))',
		'--type-scale-5': 'calc(1.25rem * var(--type-scale-factor))',
		'--type-scale-6': 'calc(1.5rem * var(--type-scale-factor))',
		'--type-scale-7': 'calc(1.875rem * var(--type-scale-factor))',
		'--type-scale-8': 'calc(2.25rem * var(--type-scale-factor))',
		'--type-scale-9': 'calc(3rem * var(--type-scale-factor))',
		'--type-scale-10': 'calc(3.75rem * var(--type-scale-factor))',
		'--type-scale-11': 'calc(4.5rem * var(--type-scale-factor))',
		'--type-scale-12': 'calc(6rem * var(--type-scale-factor))',
		'--type-scale-13': 'calc(8rem * var(--type-scale-factor))',
		'--base-font-color': 'var(--color-surface-950)',
		'--base-font-color-dark': 'var(--color-surface-50)',
		'--base-font-family':
			'ui-rounded, Hiragino Maru Gothic ProN, Quicksand, Comfortaa, Manjari, Arial Rounded MT, Arial Rounded MT Bold, Calibri, source-sans-pro, sans-serif',
		'--base-font-size': 'inherit',
		'--base-line-height': 'inherit',
		'--base-font-weight': 'inherit',
		'--base-font-style': 'normal',
		'--base-letter-spacing': '0em',
		'--heading-font-color': 'inherit',
		'--heading-font-color-dark': 'inherit',
		'--heading-font-family':
			'ui-rounded, Hiragino Maru Gothic ProN, Quicksand, Comfortaa, Manjari, Arial Rounded MT, Arial Rounded MT Bold, Calibri, source-sans-pro, sans-serif',
		'--heading-font-weight': 'bold',
		'--heading-font-style': 'normal',
		'--heading-letter-spacing': '0.025em',
		'--anchor-font-color': 'var(--color-primary-500)',
		'--anchor-font-color-dark': 'var(--color-primary-500)',
		'--anchor-font-family': 'inherit',
		'--anchor-font-size': 'inherit',
		'--anchor-line-height': 'inherit',
		'--anchor-font-weight': 'inherit',
		'--anchor-font-style': 'inherit',
		'--anchor-letter-spacing': 'inherit',
		'--anchor-text-decoration': 'none',
		'--anchor-text-decoration-hover': 'underline',
		'--anchor-text-decoration-active': 'none',
		'--anchor-text-decoration-focus': 'none',
		'--space-scale-factor': '1',
		'--radii-default': '9999px',
		'--radii-container': '24px',
		'--border-width-default': '2px',
		'--divide-width-default': '2px',
		'--outline-width-default': '2px',
		'--ring-width-default': '2px',
		'--body-background-color': 'var(--color-surface-50)',
		'--body-background-color-dark': 'var(--color-surface-950)',
		'--color-primary-50': '247 197 247',
		'--color-primary-100': '245 172 228',
		'--color-primary-200': '243 147 209',
		'--color-primary-300': '240 122 191',
		'--color-primary-400': '238 97 172',
		'--color-primary-500': '236 72 153',
		'--color-primary-600': '209 58 131',
		'--color-primary-700': '182 43 109',
		'--color-primary-800': '156 29 88',
		'--color-primary-900': '129 14 66',
		'--color-primary-950': '102 0 44',
		'--color-primary-contrast-dark': 'var(--color-primary-950)',
		'--color-primary-contrast-light': 'var(--color-primary-50)',
		'--color-primary-contrast-50': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-100': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-200': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-300': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-400': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-500': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-600': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-700': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-800': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-900': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-950': 'var(--color-primary-contrast-light)',
		'--color-secondary-50': '186 225 242',
		'--color-secondary-100': '150 216 236',
		'--color-secondary-200': '114 208 230',
		'--color-secondary-300': '78 199 224',
		'--color-secondary-400': '42 191 218',
		'--color-secondary-500': '6 182 212',
		'--color-secondary-600': '5 159 188',
		'--color-secondary-700': '4 136 165',
		'--color-secondary-800': '2 113 141',
		'--color-secondary-900': '1 90 118',
		'--color-secondary-950': '0 67 94',
		'--color-secondary-contrast-dark': 'var(--color-secondary-950)',
		'--color-secondary-contrast-light': 'var(--color-secondary-50)',
		'--color-secondary-contrast-50': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-100': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-200': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-300': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-400': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-500': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-600': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-700': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-800': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-900': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-950': 'var(--color-secondary-contrast-light)',
		'--color-tertiary-50': '168 245 245',
		'--color-tertiary-100': '138 233 229',
		'--color-tertiary-200': '109 221 213',
		'--color-tertiary-300': '79 208 198',
		'--color-tertiary-400': '50 196 182',
		'--color-tertiary-500': '20 184 166',
		'--color-tertiary-600': '16 161 144',
		'--color-tertiary-700': '12 137 122',
		'--color-tertiary-800': '8 114 99',
		'--color-tertiary-900': '4 90 77',
		'--color-tertiary-950': '0 67 55',
		'--color-tertiary-contrast-dark': 'var(--color-tertiary-950)',
		'--color-tertiary-contrast-light': 'var(--color-tertiary-50)',
		'--color-tertiary-contrast-50': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-100': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-200': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-300': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-400': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-500': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-600': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-700': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-800': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-900': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-950': 'var(--color-tertiary-contrast-light)',
		'--color-success-50': '205 255 163',
		'--color-success-100': '190 245 135',
		'--color-success-200': '176 235 107',
		'--color-success-300': '161 224 78',
		'--color-success-400': '147 214 50',
		'--color-success-500': '132 204 22',
		'--color-success-600': '106 180 18',
		'--color-success-700': '79 156 13',
		'--color-success-800': '53 133 9',
		'--color-success-900': '26 109 4',
		'--color-success-950': '0 85 0',
		'--color-success-contrast-dark': 'var(--color-success-950)',
		'--color-success-contrast-light': 'var(--color-success-50)',
		'--color-success-contrast-50': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-100': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-200': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-300': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-400': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-500': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-600': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-700': 'var(--color-success-contrast-light)',
		'--color-success-contrast-800': 'var(--color-success-contrast-light)',
		'--color-success-contrast-900': 'var(--color-success-contrast-light)',
		'--color-success-contrast-950': 'var(--color-success-contrast-light)',
		'--color-warning-50': '255 255 194',
		'--color-warning-100': '251 240 157',
		'--color-warning-200': '247 225 120',
		'--color-warning-300': '242 209 82',
		'--color-warning-400': '238 194 45',
		'--color-warning-500': '234 179 8',
		'--color-warning-600': '208 156 6',
		'--color-warning-700': '182 134 5',
		'--color-warning-800': '155 111 3',
		'--color-warning-900': '129 89 2',
		'--color-warning-950': '103 66 0',
		'--color-warning-contrast-dark': 'var(--color-warning-950)',
		'--color-warning-contrast-light': 'var(--color-warning-50)',
		'--color-warning-contrast-50': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-100': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-200': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-300': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-400': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-500': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-600': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-700': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-800': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-900': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-950': 'var(--color-warning-contrast-light)',
		'--color-error-50': '255 215 204',
		'--color-error-100': '252 186 177',
		'--color-error-200': '249 156 150',
		'--color-error-300': '245 127 122',
		'--color-error-400': '242 97 95',
		'--color-error-500': '239 68 68',
		'--color-error-600': '211 54 54',
		'--color-error-700': '183 41 41',
		'--color-error-800': '156 27 27',
		'--color-error-900': '128 14 14',
		'--color-error-950': '100 0 0',
		'--color-error-contrast-dark': 'var(--color-error-950)',
		'--color-error-contrast-light': 'var(--color-error-50)',
		'--color-error-contrast-50': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-100': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-200': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-300': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-400': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-500': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-600': 'var(--color-error-contrast-light)',
		'--color-error-contrast-700': 'var(--color-error-contrast-light)',
		'--color-error-contrast-800': 'var(--color-error-contrast-light)',
		'--color-error-contrast-900': 'var(--color-error-contrast-light)',
		'--color-error-contrast-950': 'var(--color-error-contrast-light)',
		'--color-surface-50': '224 224 255',
		'--color-surface-100': '199 200 252',
		'--color-surface-200': '174 175 249',
		'--color-surface-300': '149 151 247',
		'--color-surface-400': '124 126 244',
		'--color-surface-500': '99 102 241',
		'--color-surface-600': '87 91 215',
		'--color-surface-700': '76 79 189',
		'--color-surface-800': '64 68 164',
		'--color-surface-900': '53 56 138',
		'--color-surface-950': '41 45 112',
		'--color-surface-contrast-dark': 'var(--color-surface-950)',
		'--color-surface-contrast-light': 'var(--color-surface-50)',
		'--color-surface-contrast-50': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-100': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-200': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-300': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-400': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-500': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-600': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-700': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-800': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-900': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-950': 'var(--color-surface-contrast-light)'
	},
	metadata: { version: '3.0.0', emoji: '🌸' }
} satisfies Theme;

export default modern;