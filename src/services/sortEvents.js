import sortDates from "./sortDates";
import sortPrices from "./sortPrices";

const sortEvents = (events, sorter) => {
    if (sorter === null) {
        return events;
    }
    if (sorter === "dates") {
        return sortDates(events);
    }
    return sortPrices(events, sorter);
};

export default sortEvents;
