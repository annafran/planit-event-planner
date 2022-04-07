const { DateTime } = require("luxon");

const dateToday = () => {
    return DateTime.now().toLocaleString(DateTime.DATE_FULL);
};

dateToday();

export default dateToday;
