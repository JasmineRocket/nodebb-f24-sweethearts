'use strict';

const path = require('path');
const nconf = require('nconf');

nconf.argv().env({
	separator: '__',
}).file({
	file: path.join(__dirname, 'config.json'),
});

const db = require('./src/database');

async function checkDatabase() {
	await db.init();

	const userKeys = await db.getSortedSetRange('users:joindate', 0, 4);

	for (const userKey of userKeys) {
		const settingsKey = `user:${userKey}:settings`;
		const settings = db.getObject(settingsKey);
		console.log(`User ${userKey} settings:`, settings);
	}

	process.exit();
}

checkDatabase().catch((err) => {
	console.error('Error during database check:', err);
	process.exit(1);
});

// Ensure there's a newline at the end of the file
