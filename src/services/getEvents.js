const apiKey = process.env.REACT_APP_API_KEY;

import sortDates from "./sortDates";

const getEvents = async (countryCode, geoPoint) => {
    if (countryCode) {
        try {
            const url = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${countryCode}&size=100&apikey=${apiKey}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            const data = await response.json();
            const events = data._embedded.events;
            const sortedEvents = sortDates(events);
            return sortedEvents;
        } catch (error) {
            console.error(`Could not get events: ${error}`);
        }
    } else {
        try {
            const url = `https://app.ticketmaster.com/discovery/v2/events.json?geoPoint=${geoPoint}&size=100&apikey=${apiKey}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            const data = await response.json();
            const events = data._embedded.events;
            const sortedEvents = sortDates(events);
            return sortedEvents;
        } catch (error) {
            console.error(`Could not get events: ${error}`);
        }
    }
    //The default if no country is selected and no geolocation is found, is set to "NZ" - New Zealand
    try {
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=NZ&size=100&apikey=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        const events = data._embedded.events;
        const sortedEvents = sortDates(events);
        return sortedEvents;
    } catch (error) {
        console.error(`Could not get events: ${error}`);
    }
};
export default getEvents;
