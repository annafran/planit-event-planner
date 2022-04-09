import { React, useState, useEffect } from "react";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
let geohash = require("ngeohash");

import getEvents from "./services/getEvents";
import getEventsBySearch from "./services/getEventsBySearch";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Toolbar from "./components/Toolbar";
import Events from "./components/Events";
import Pagination from "./components/Pagination";
import filterToday from "./utils/filterToday";
import sortEvents from "./utils/sortEvents";

const colors = {
    lavenderGray: "#C9CAD9",
    ghostWhite: "#E7E8EE",
    lavenderBlue: "#D1D2F9",
    babyBlueEyes: "#A3BCF9",
    blueGray: "#7796CB",
    darkBlueGray: "#576490",
    skyBlueCrayola: "#56CFE1",
    turquoise: "#72EFDD",
    unitedNationsBlue: "#5390D9",
    mediumTurquoise: "#64DFDF",
    aquamarine: "#80FFDB",
    frenchViolet: "#6930C3",
    purple: "#7400B8",
    slateBlue: "#5E60CE",
    lavenderWeb: "#D8E3FD",
    razzmatazz: "#EC096F",
    steelPink: "#D91CBC",
    violetWeb: "#EF81DE",
};

const styles = {
    global: {
        body: {
            bg: "lavenderWeb",
        },
    },
};

const breakpoints = {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
    "3xl": "125em",
    "4xl": "150em",
};

const theme = extendTheme({ colors, styles, breakpoints });

const App = () => {
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage] = useState(10);
    const [query, setSearch] = useState("");
    const [currentCountry, setCurrentCountry] = useState("");
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [dateOption, setDateOption] = useState("");
    const [loading, setLoading] = useState(false);
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
        getLocation();
    }, []);

    useEffect(() => {
        console.log({ currentLocation });
    }, [currentLocation]);

    useEffect(() => {
        setLoading(true);
        const loadData = async () => {
            setEvents(await getEvents(currentCountry, currentLocation));
            setLoading(false);
        };

        if (currentLocation) {
            loadData();
        }
    }, [currentCountry, currentLocation]);

    useEffect(() => {
        const loadData = () => {
            const filteredToday = filterToday(events, dateOption);
            setFilteredEvents([...filteredToday]);
        };

        loadData();
    }, [dateOption, events]);

    useEffect(() => {
        const loadData = () => {
            const sorted = sortEvents(events, sortBy);
            setFilteredEvents([...sorted]);
        };

        loadData();
    }, [sortBy, events]);

    useEffect(() => {
        const loadData = () => {
            const searchedEvents = getEventsBySearch(events, query);
            setFilteredEvents([...searchedEvents]);
        };

        loadData();
    }, [events, query]);

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = filteredEvents.slice(
        indexOfFirstEvent,
        indexOfLastEvent
    );

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const getLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
        } else {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCurrentLocation(
                        geohash.encode(
                            position.coords.latitude,
                            position.coords.longitude
                        )
                    );
                },
                () => {
                    alert("Unable to retrieve your location");
                }
            );
        }
    };

    return (
        <ChakraProvider theme={theme}>
            <Header />
            <Banner setSearch={setSearch} query={query} />
            <Toolbar
                onCountryChange={setCurrentCountry}
                setDateOption={setDateOption}
                setSortBy={setSortBy}
            />
            <Events events={currentEvents} loading={loading} />
            <Pagination
                currentPage={currentPage}
                eventsPerPage={eventsPerPage}
                totalEvents={filteredEvents.length}
                paginate={paginate}
            />
        </ChakraProvider>
    );
};

export default App;
