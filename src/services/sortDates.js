const sortDates = (events) => {
    events.sort((eventA, eventB) => {
        const aDate = new Date(eventA.dates.start.localDate);
        const bDate = new Date(eventB.dates.start.localDate);
        return aDate - bDate;
    });
    return events;
};

export default sortDates;
