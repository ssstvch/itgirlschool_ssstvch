const {src, dest} = require('gulp');
const webp_conv = require('gulp-webp');
const changed = require('gulp-changed');
const multy_dest = require('gulp-multi-dest');
const plumber = require('gulp-plumber');


module.exports = webp = (done) => {
    return src('./build/img/**/*.+(png|jpg|jpeg)')
        .pipe(plumber())
        .pipe(changed('./build/img', {
            extension: '.webp',
        }))
        .pipe(webp_conv())
        .pipe(multy_dest(['./src/img', 'build/img'])),
        done()
}