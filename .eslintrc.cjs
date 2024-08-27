module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
	  'eslint:recommended',
	  'plugin:react/recommended',
	  'plugin:@typescript-eslint/recommended',
	  'airbnb', 'airbnb/hooks',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 15,
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
	],
	rules: {
		'react/jsx-filename-extension': 'off',
		'react/react-in-jsx-scope': 'off',
		indent: [2, 'tab'],
		allowIndentationTabs: true,
	},
};
