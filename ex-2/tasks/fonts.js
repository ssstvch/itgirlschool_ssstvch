const fs = require('fs');
const chalk = require('chalk');

let src_fonts = './src/scss/_local-fonts.scss',
    app_fonts = './build/fonts';

module.exports = fonts = (done) => {
    fs.writeFile(src_fonts, '', () => {});
    fs.readdir(app_fonts, (err, items) => {
        if(items) {
            let c_fontname;
            for(let i = 0; i < items.length; i++) {
                let fontname = items[i].split('.'),
                    font_ext;
                font_ext = fontname[1];
                fontname = fontname[0];
                if(c_fontname != fontname) {
                    if(font_ext == 'woff' || font_ext == 'woff2') {
                        fs.appendFile(src_fonts, `@include font-face("${fontname}", "${fontname}", 400);\r\n`, () => {});
                        console.log(chalk `
                        {bold {bgGray Added new font: ${fontname}.}
                        ----------------------------------------------------------------------------------
                        {bgYellow.black Please, move mixin call from {cyan src/scss/_local-fonts.scss} to {cyan src/scss/_fonts.scss} and then change it!}}
                        ----------------------------------------------------------------------------------`);
					}
				}
				c_fontname = fontname;
			}
		}
	})
	done();
}