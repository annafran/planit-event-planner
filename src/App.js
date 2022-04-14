import { React, useState, useEffect } from "react";
import {
    extendTheme,
    ChakraProvider,
    Box,
    Spinner,
    Text,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
let geohash = require("ngeohash");

import getEvents from "./services/getEvents";
import getEventsBySearch from "./services/getEventsBySearch";
import sortEvents from "./services/sortEvents";
import filterByDate from "./services/filterByDate";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Toolbar from "./components/Toolbar";
import Events from "./components/Events";
import Pagination from "./components/Pagination";

const colors = {
    babyBlueEyes: "#A3BCF9",
    lavenderWeb: "#D8E3FD",
    lavenderGray: "#C9CAD9",
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
    const [eventsPerPage] = useState(12);
    const [query, setSearch] = useState("");
    const [currentCountry, setCurrentCountry] = useState("");
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [sorter, setSorter] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [favorites, setFavorites] = useState([]);

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

    useEffect(() => {
        getLocation();
    }, []);

    useEffect(() => {
        setLoading(true);
        const loadData = async () => {
            setEvents(await getEvents(currentCountry, currentLocation));
            setLoading(false);
        };

        loadData();
    }, [currentCountry, currentLocation]);

    useEffect(() => {
        const loadData = () => {
            const filteredDate = filterByDate(events, selectedDate);
            const searchedEvents = getEventsBySearch(filteredDate, query);
            const sorted = sortEvents(searchedEvents, sorter);
            setFilteredEvents([...sorted]);
        };

        loadData();
        paginate(1);
    }, [selectedDate, sorter, query, events]);

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = filteredEvents.slice(
        indexOfFirstEvent,
        indexOfLastEvent
    );

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const addFav = (id) => {
        let array = favorites;
        let addArray = true;
        array.map((item, num) => {
            if (item === id) {
                array.splice(num, 1);
                addArray = false;
            }
        });
        if (addArray) {
            array.push(id);
        }
        setFavorites([...array]);
        localStorage.setItem("favorites", JSON.stringify(favorites));

        let storage = localStorage.getItem("favItem" + id || "0");
        if (storage == null) {
            localStorage.setItem("favItem" + id, JSON.stringify(id));
        } else {
            localStorage.removeItem("favItem" + id);
        }
    };

    useEffect(() => {
        const getFavs = JSON.parse(localStorage.getItem("favorites") || "0");
        if (getFavs !== 0) {
            setFavorites(getFavs);
        }
    }, [favorites]);

    const renderContent = () => {
        if (loading) {
            return (
                <Box display="flex" justifyContent="center">
                    <Spinner
                        thickness="6px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        w="6rem"
                        h="6rem"
                        mt="5rem"
                        mb="5rem"
                    />
                </Box>
            );
        }

        if (filteredEvents.length === 0) {
            return (
                <Box
                    w="90%"
                    m="auto"
                    mt="5rem"
                    display="grid"
                    direction="column"
                    gap="2rem"
                >
                    <Search2Icon justifySelf="center" boxSize="2rem" />
                    <Text fontSize="2xl" justifySelf="center">
                        Oops no events found!
                    </Text>
                </Box>
            );
        }

        return (
            <>
                <Events
                    events={currentEvents}
                    favorites={favorites}
                    addFav={addFav}
                />
                <Pagination
                    currentPage={currentPage}
                    eventsPerPage={eventsPerPage}
                    totalEvents={filteredEvents.length}
                    paginate={paginate}
                />
            </>
        );
    };

    return (
        <ChakraProvider theme={theme}>
            <Header />
            <Banner setSearch={setSearch} query={query} />
            <Toolbar
                setCurrentCountry={setCurrentCountry}
                setSorter={setSorter}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            {renderContent()}
        </ChakraProvider>
    );
};

export default App;
