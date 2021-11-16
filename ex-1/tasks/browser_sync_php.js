const browser_sync = require('browser-sync');

module.exports = browser_sync_php = (done) => {
	browser_sync.init({
		browser: ['chrome'],
		watch: true,
		proxy: '',
		logLevel: 'info',
		logPrefix: 'BS-PHP:',
		logConnections: true,
		logFileChanges: true,
	}),
    done();
}