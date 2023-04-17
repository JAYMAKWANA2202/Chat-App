// webpack.config.js

module.exports = {
    // Other configurations...
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src/"), // Define alias for images directory
        },
    },
};
