const getEvents = async () => {
    try {
        const url =
            "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=ES&size=100&sort=date,asc&apikey=6jG90DR1wOjINQitcnGMKO7gk8DJFCRD";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        const allEvents = data._embedded.events;
        return allEvents;

        // const removeDuplicates = (arr, property) => {
        //     return [
        //         ...new Map(
        //             arr.map((event) => [event[property], event])
        //         ).values(),
        //     ];
        // };
        // return removeDuplicates(allEvents, "name");
    } catch (error) {
        console.error(`Could not get events: ${error}`);
    }
};

export default getEvents;
