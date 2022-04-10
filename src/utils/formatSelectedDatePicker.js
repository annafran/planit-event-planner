const { DateTime } = require("luxon");

const formatSelectedDatePicker = (date) => {
    return DateTime.fromJSDate(date).toFormat("dd-LL-yyyy");
};

export default formatSelectedDatePicker;
