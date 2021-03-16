module.exports = {
	parser: '@babel/eslint-parser',
	parserOptions: {
		babelOptions: {
			configFile: './babel.config.json'
		}
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},
	extends: ['eslint:recommended', 'google'],
	rules: {
		'semi': 'off',
		'comma-dangle': 'off',
		'require-jsdoc': 'off',
		'linebreak-style': 'off',
		'no-tabs': 'off',
		'indent': 'off',
		'arrow-parens': 'off',
		'max-len': 'off',
		'eol-last': 'off'
	}
}