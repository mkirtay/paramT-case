module.exports = {
    reactScriptsVersion: "react-scripts",
    typescript: {
        enableTypeChecking: true
    },
    react: {
        version: '18.2.0'
    },
    style: {
        css: {
            loaderOptions: () => {
                return {url: false}
            }
        }
    },
    babel: {
        presets: [['@babel/preset-react', {"runtime": "automatic"}]],
        loaderOptions: (babelLoaderOptions, {env, paths}) => {
            return babelLoaderOptions;
        },
    },
};
