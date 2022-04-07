const { DateTime } = require("luxon");

const formattedDate = (startDate) => {
    return DateTime.fromISO(String(startDate)).toFormat("d LLLL yyyy");
};

formattedDate();
export default formattedDate;
