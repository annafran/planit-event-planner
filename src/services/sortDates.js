const sortDates = (events) => {
    events.sort((eventA, eventB) => {
        const aDate = new Date(eventA.dates.start.localDate);
        const bDate = new Date(eventB.dates.start.localDate);

        return aDate - bDate;
    });
    console.log(events.map((event) => event.dates.start.localDate));
    return events;
};

export default sortDates;
