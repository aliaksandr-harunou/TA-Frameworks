const fsextra = require('fs-extra');
const path = require('path');
const moment = require('moment');
const logger = require('../../../test/config/logger.config');
moment.locale('ru');
let todayMinusTwoDays = moment().clone().subtract(2, 'days').format('L');
const logsLocation = path.resolve(`./test/logs/info_[${todayMinusTwoDays}].log`);

fsextra.exists(logsLocation, function (exists) {
    if (exists) {
        logger.info(`Logs exist. Deleting file info[${todayMinusTwoDays}].log`);
        fsextra.unlinkSync(logsLocation);
    } else {
        logger.info(`File 'info[${todayMinusTwoDays}].log' not found`);
    }
});