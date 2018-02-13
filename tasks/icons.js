const easy = require('easy-svg');
const fs = require('vinyl-fs');

module.exports = function (opts) {
    return fs.src(opts.input)
        .pipe(easy.stream())
        .pipe(fs.dest(opts.output));
};
