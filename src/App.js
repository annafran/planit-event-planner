import { React, useState, useEffect } from "react";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

import getEvents from "./services/getEvents";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Toolbar from "./components/Toolbar";
import Events from "./components/Events";

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
};

const styles = {
    global: {
        body: {
            bg: "lavenderWeb",
        },
    },
};

const theme = extendTheme({ colors, styles });

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
            <Header />
            <Banner />
            <Toolbar />
            <Events events={events} />
        </ChakraProvider>
    );
};

export default App;
