const getEventsBySearch = (events, query) => {
    if (!query) {
        return events;
    }
    return events.filter((event) => {
        const eventName = event.name.toLowerCase();
        return eventName.includes(query);
    });
};

export default getEventsBySearch;
