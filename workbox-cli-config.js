module.exports = {
    "globDirectory": "./dist/",
    "globPatterns": [
        "**/*.css",
        "**/*.js",
        "*.webmanifest"
    ],
    "templatedUrls": {
       "/": ["index.html"],
       "/index.html": ["index.html"]
    },
    "swDest": "dist/service-worker.js",
    "swSrc": "src/service-worker.js"
};
