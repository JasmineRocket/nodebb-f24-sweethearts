'use strict';

const db = require('../../database');
const batch = require('../../batch');

module.exports = {
    name: 'Add_faculty_reply_notification_setting_for_all_users',
    timestamp: Date.UTC(2023, 5, 1),  // June 1, 2023 - adjust this date as needed
    method: async function () {
        const { progress } = this;

        await batch.processSortedSet('users:joindate', async (uids) => {
            await Promise.all(uids.map(async (uid) => {
                await db.setObjectField(`user:${uid}:settings`, 'notificationType_faculty-reply', 'notification');
            }));
            
            if (progress) {
                progress.incr(uids.length);
            }
        }, {
            batch: 500,
        });
    },
};