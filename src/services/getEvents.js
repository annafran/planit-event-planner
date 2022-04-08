const apiKey = process.env.REACT_APP_API_KEY;

const getEvents = async (countryCode, geoPoint) => {
    try {
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?geoPoint=${geoPoint}&size=100&apikey=${apiKey}`;
        console.log(url);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        const events = data._embedded.events;
        return events;
    } catch (error) {
        console.error(`Could not get events: ${error}`);
    }
};

export default getEvents;
