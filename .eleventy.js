module.exports = (eleventyConfig) => {
    eleventyConfig.addWatchTarget("./src/assets");

    eleventyConfig.addPassthroughCopy('src/assets');
    
    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};
