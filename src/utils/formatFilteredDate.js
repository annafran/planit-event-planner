const { DateTime } = require("luxon");

const formatFilteredDate = (date) => {
    return DateTime.fromJSDate(date).toFormat("dd-LL-yyyy");
};

export default formatFilteredDate;
