const filterByFavorites = (events, filterFavorites, favorites) => {
    console.log({ f: filterFavorites });
    // const getFavs = JSON.parse(localStorage.getItem("favorites") || "0");
    if (filterFavorites === "favorites") {
        return events.filter((event) => {
            console.log({ favorites: favorites });
            return favorites.includes(event.id);
        });
    }
    return events;
};

export default filterByFavorites;
