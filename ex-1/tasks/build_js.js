const {src, dest} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browser_sync = require('browser-sync').create();

module.exports = build_js = (done) => {
    return src(['./src/**/*.js', './src/scripts/01_main.js'])
        .pipe(uglify())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.min.js'))
        .pipe(dest('./build/scripts'))
        done()
}