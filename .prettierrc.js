module.exports = {
	printWidth: 120,
	trailingComma: 'es5',
	tabWidth: 4,
	useTabs: true,
	singleQuote: true,
	proseWrap: 'preserve',
	overrides: [
		{
			files: ['**/**/*.yml', '*.yml'],
			options: {
				useTabs: false,
				singleQuote: false,
				semi: false,
				quoteProps: 'preserve',
				trailingComma: 'none',
				parser: 'yaml',
				tabWidth: 2,
			}
		  },
	],
};
