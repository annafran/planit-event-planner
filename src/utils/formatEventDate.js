const { DateTime } = require("luxon");

const formatEventDate = (date) => {
    return DateTime.fromISO(String(date)).toFormat("d LLLL yyyy");
};

export default formatEventDate;
