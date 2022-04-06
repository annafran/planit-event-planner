import { React, useState, useEffect } from "react";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Events from "./components/Events";
import getEvents from "./services/getEvents";

const colors = {
    lavenderGray: "#C9CAD9",
    lavenderBlue: "#D1D2F9",
    babyBlueEyes: "#A3BCF9",
    blueGray: "#7796CB",
    darkBlueGray: "#576490",
};

const theme = extendTheme({ colors });

const App = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            setEvents(await getEvents());
        };

        loadData();
    }, []);

    return (
        <ChakraProvider theme={theme}>
            <header className="mainHeader">
                <h1>PLANIT</h1>
            </header>
            <div className="banner"></div>
            <Events events={events} />
        </ChakraProvider>
    );
};

export default App;
