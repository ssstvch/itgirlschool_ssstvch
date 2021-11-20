const {src, dest} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browser_sync = require('browser-sync').create();

module.exports = build_js = (done) => {
    return src(['./src/**/*.js', './src/scripts/01_main.js'])
        .pipe(babel({
            presets: [
                "@babel/preset-env",
                "@babel/runtime-corejs3",
                "@babel/plugin-transform-runtime"
            ]
        }))
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(dest('./build/scripts'))
        .pipe(browser_sync.reload({
            stream: true
        })),
        done();
}