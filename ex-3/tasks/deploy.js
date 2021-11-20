const {src} = require('gulp');
const ftp = require('vinyl-ftp');
const ftp_settings = require('../tasks/ftp_settings');
const chalk = require('chalk');
const connect = ftp.create(ftp_settings);


// Константа connect - это функция, в которую аргументом передаётся объект с настройками хостинга - адрес сервера, логин, пароль. 

//  Я создал отдельный файл tasks/ftp_settings.json с настройками и рекомендую вам добавить его в gitignore, чтобы случайно не забыть и не вывалить свои логин и пароль к хостингу на весь мир

// {
// 	"host": "yourhosting.com",
// 	"user": "username",
// 	"pass": "*********",
// 	"parallel": 10
// }

module.exports = deploy = (done) => {
    return src(['./build/**/*.*', '!./build/**/*.map'])
        .pipe(connect.newer('public_html/'))
        .pipe(connect.dest('public_html/'))
        .on('success', () => console.log(`Finished deploing ./build to https//${chalk.blueBright(ftp_settings.host)}`)),
        done();
}