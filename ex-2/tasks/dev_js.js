const {src, dest} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const browser_sync = require('browser-sync').create();

module.exports = dev_js = (done) => {
    return src(['./src/**/*.js', './src/scripts/01_main.js'])
        .pipe(map.init())
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(map.write('../sourcemaps'))
        .pipe(dest('./build/scripts'))
    .pipe(browser_sync.reload({
        stream: true,
    })),
    done();
}