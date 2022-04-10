import formatSelectedDate from "./formatSelectedDate";

const filterByDate = (events, selectedDate) => {
    if (selectedDate === null) {
        return events;
    }

    return events.filter((event) => {
        return formatSelectedDate(selectedDate) === event.dates.start.localDate;
    });
};

export default filterByDate;
