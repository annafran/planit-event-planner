const getEvents = async () => {
    try {
        const url =
            "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=ES&size=20&sort=date,asc&apikey=6jG90DR1wOjINQitcnGMKO7gk8DJFCRD";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        console.log("data", data);
        const allEvents = data._embedded.events;

        const removeDuplicates = (allEvents, key) => {
            return [...new Map(allEvents.map((x) => [key(x), x])).values()];
        };
        return JSON.stringify(removeDuplicates(allEvents, (it) => it.name));
    } catch (error) {
        console.error(`Could not get events: ${error}`);
    }
};

export default getEvents;
