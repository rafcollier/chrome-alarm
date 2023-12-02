module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        '@babel/plugin-proposal-export-default-from',
        [
            // Added the formatjs plugin mainly for consistency with the Platform
            // Frontend to avoid compatibility issues with unit tests during
            // migrations. For more info about what the plugin does see:
            // https://formatjs.io/docs/tooling/babel-plugin/.
            'formatjs',
            {
                idInterpolationPattern: '[sha512:contenthash:base64:6]',
                ast: true,
            },
        ],
    ],
};
