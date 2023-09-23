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
        // plugins: [],
        loaderOptions: (babelLoaderOptions, {env, paths}) => {
            console.log("BABEL");
            console.log(babelLoaderOptions);
            return babelLoaderOptions;
        },
    },
};
