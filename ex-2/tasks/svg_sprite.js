const {src, dest} = require('gulp');
const svgmin = require('gulp-svgmin');
const sprite = require('gulp-svg-sprite');

module.exports = svg_sprite = (done) => {
    return src('src/svg/**/*.svg')
        .pipe(svgmin({
            plugins: [{
                removeComments: true,
            }, {
                removeEmptyContainers: true,
            }],
        }))
        .pipe(sprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg',
                }
            }
        }))
        .pipe(dest('./src/img')),
        done()
}