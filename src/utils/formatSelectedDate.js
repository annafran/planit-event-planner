const { DateTime } = require("luxon");

const formatSelectedDate = (date) => {
    return DateTime.fromJSDate(date).toFormat("yyyy-LL-dd");
};

export default formatSelectedDate;
