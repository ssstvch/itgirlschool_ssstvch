const {src, dest} = require('gulp');
const svgmin = require('gulp-svgmin');
const svg_css_pseudo = require('gulp-svg-css-pseudo');

module.exports = svg_css = (done) => {
    return src('./src/svg/**/*.svg')
        .pipe(svgmin({
            plugins: [{
                removeComments: true,
            }, {
                removeEmptyContainers: true,
            }]
        }))
        .pipe(svg_css_pseudo({
            fileName: '_svg',
            fileExt: 'scss',
            cssPrefix: '--svg__',
            addSize: false,
        }))
        .pipe(dest('./src/scss/global')),
        done()
}