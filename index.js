#!/usr/bin/env node

var GogoShell = require('gogo-shell');

var gogoShell = new GogoShell();

const DEFAULT_PORT = 11311;

var config = {
	port: DEFAULT_PORT
};

gogoShell.connect(config)
	.then(() => gogoShell.sendCommand(...(process.argv.slice(2))))
	.then((data) => {
		process.stdout.write(data);

		gogoShell.end();
	});
