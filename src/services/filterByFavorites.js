const filterByFavorites = (events, filterFavorites) => {
    if (filterFavorites === "favorites") {
        return events.filter((event) => {
            return event.favorite;
        });
    }
    return events;
};

export default filterByFavorites;
// module.exports = filterByFavorites;
