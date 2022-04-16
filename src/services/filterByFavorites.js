const filterByFavorites = (events, filterFavorites, favorites) => {
    if (filterFavorites === "favorites") {
        return events.filter((event) => {
            console.log({ favorites: favorites });
            return favorites.includes(event.id);
        });
    }
    return events;
};

export default filterByFavorites;
