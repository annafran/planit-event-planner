const getEvents = async () => {
    try {
        const url =
            "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=NZ&apikey=6jG90DR1wOjINQitcnGMKO7gk8DJFCRD";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        console.log("data", data);
        const events = data._embedded.events;
        console.log(events);
        return events;
    } catch (error) {
        console.error(`Could not get events: ${error}`);
    }
};

export { getEvents };
