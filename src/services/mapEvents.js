const mapEvents = (events, favorites) => {
    return events.map((event) => {
        return {
            ...event,
            favorite: favorites.includes(event.id),
        };
    });
};

export default mapEvents;
