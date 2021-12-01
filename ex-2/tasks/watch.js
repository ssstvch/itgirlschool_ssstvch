const {watch, parallel, series} = require('gulp');
const browser_sync = require('browser-sync');

module.exports = watching = (done) => {
    watch('./src/components/**/*.html', parallel('html'));
    // watch('./src/**/*.php', parallel('php'));
    watch('./src/**/*.scss', parallel('style'));
    watch('./src/**/*.js', parallel('dev_js'));
    watch('./src/**/*.json', parallel('html'));
    watch('./src/img/**/*.+(png|jpg|jpeg|gif|svg|ico)', parallel('rastr'));
    watch('./build/img/**/*.+(png|jpg|jpeg)', parallel('webp'));
    watch('./src/svg/css/**/*.svg', series('svg_sprite', 'rastr'));
    watch('./src/svg/sprite/**/*.svg', series('svg_sprite', 'rastr'));
    watch('./src/fonts/**/*.ttf', series('ttf', 'fonts'));
    done();
}