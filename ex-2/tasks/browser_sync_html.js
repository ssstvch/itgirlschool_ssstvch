const {watch, series} = require('gulp');
const browser_sync = require('browser-sync');

module.exports = browser_sync_html = (done) => {
    browser_sync.init({
        server: {
            baseDir: './build/',
            host: '81.9.127.192'
        },
        callbacks: {
            ready: (err, browser_sync) => {
                browser_sync.addMiddleware('*', (req, res) => {
                    res.writeHead(302, {
                        location: '404.html',
                    });
                    res.end('Redirecting!');
                });
            }
        },
        logPrefix: 'BS-HTML',
        logLevel: 'info',
        logConnections: true,
        logFileChanges: true,
        open: true,
    });

    watch('./src//**/*.scss', series('style'));
    watch('./src/**/*.+(html|js|json|ttf|svg|jpg|jpeg|png|scss)').on('change', () => {
        browser_sync.reload();
    });
//     watch('./src/**/*.js').on('change', () => {
//         browser_sync.reload();
//     });
}