module.exports = {
	'package.json': () => [
		'yarn scan',
	],
	'*.{ts,tsx}': () => [
		'yarn format',
		'yarn lint',
		'yarn test',
	],
	'*.{css,scss}': () => [
		'yarn format',
		'yarn lint',
	],
};
