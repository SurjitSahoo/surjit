module.exports = (config, context) => {
	return {
		...config,
		entry: {
			...config.entry,
			"payload.config": './packages/thoughts/payload.config.ts',
		},
		output: {
			...config.output,
			filename: '[name].js',
		},
	};
};