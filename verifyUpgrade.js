'use strict';

const path = require('path');
const nconf = require('nconf');

nconf.argv().env({
	separator: '__',
}).file({
	file: path.join(__dirname, 'config.json'),
});

async function verifyUpgrade() {
	const db = require('./src/database');
	await db.init();

	// Get 5 random user IDs
	const uids = await db.getSortedSetRange('users:joindate', 0, 4);

	// Process all user settings concurrently to avoid the 'no-await-in-loop' error
	const userSettingsPromises = uids.map(async (uid) => {
		const userSettings = await db.getObject(`user:${uid}:settings`);
		console.log(`User ${uid} faculty reply setting:`, userSettings.notificationType_faculty_reply);
	});

	await Promise.all(userSettingsPromises); // Await all promises together

	process.exit();
}

verifyUpgrade().catch((err) => {
	console.error('Error during verification:', err);
	process.exit(1);
});
