import { React, useState, useEffect } from "react";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

import getEvents from "./services/getEvents";
import getEventsBySearch from "./services/getEventsBySearch";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Toolbar from "./components/Toolbar";
import Events from "./components/Events";
import Pagination from "./components/Pagination";
// import getClassifications from "./services/getClassifications";

// import currentCountryFunc from "./services/currentCountryFunc";

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
    const [currentCountry, setCurrentCountry] = useState("ES");
    const [filteredEvents, setFilteredEvents] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            setEvents(await getEvents(currentCountry));
        };

        loadData();
    }, [currentCountry]);

    // useEffect(() => {
    //     const loadData = async () => {
    //         const urlCode = currentCountryFunc(currentCountry);
    //         setCurrentCountry(urlCode);
    //         setEvents(await getEvents(currentCountry));
    //     };

    //     loadData();
    // }, [currentCountry]);

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

    return (
        <ChakraProvider theme={theme}>
            <Header />
            <Banner setSearch={setSearch} query={query} />
            <Toolbar onCountryChange={setCurrentCountry} />
            <Events events={currentEvents} />
            <Pagination
                eventsPerPage={eventsPerPage}
                totalEvents={filteredEvents.length}
                paginate={paginate}
            />
        </ChakraProvider>
    );
};

export default App;
