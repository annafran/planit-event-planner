const { DateTime } = require("luxon");

const formattedDate = (date) => {
    return DateTime.fromISO(String(date)).toFormat("d LLLL yyyy");
};

export default formattedDate;
