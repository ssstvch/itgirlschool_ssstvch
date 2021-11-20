const { sync } = require('glob');
const gulp = require('gulp');

const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.style = tasks.style;
exports.libs_style = tasks.libs_style;
// exports.build_js = tasks.build_js;
exports.libs_js = tasks.libs_js;
exports.dev_js = tasks.dev_js;
exports.html = tasks.html;
// exports.php = tasks.php;
exports.rastr = tasks.rastr;
exports.webp = tasks.webp;
exports.svg_css = tasks.svg_css;
exports.svg_sprite = tasks.svg_sprite;
exports.ttf = tasks.ttf;
exports.fonts = tasks.fonts;
exports.browser_sync_html = tasks.browser_sync_html;
// exports.browser_sync_php = tasks.browser_sync_php;
exports.browser_sync = tasks.browser_sync;
exports.watch = tasks.watch;
exports.deploy = tasks.deploy;


exports.default = gulp.parallel(
	exports.libs_style,
	exports.style,
	exports.libs_js,
	exports.dev_js,
	//exports.build_js,
	exports.rastr,
	exports.webp,
	exports.svg_css,
	exports.svg_sprite,
	exports.ttf,
	exports.fonts,
	exports.html,
	exports.browser_sync_html,
	exports.watch
)

// exports.dev_php = gulp.parallel(
// 	exports.libs_style,
// 	exports.svg_css,
// 	exports.fonts,
// 	exports.style,
// 	exports.libs_js,
// 	exports.dev_js,
// 	exports.rastr,
// 	exports.webp,
// 	exports.svg_sprite,
// 	exports.ttf,
// 	exports.php,
// 	exports.browser_sync_php,
// 	exports.watch
// )