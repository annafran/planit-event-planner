import { React, useState, useEffect } from "react";
import {
    extendTheme,
    ChakraProvider,
    Image,
    Box,
    Heading,
    Menu,
    MenuButton,
} from "@chakra-ui/react";
import "./App.css";
import Events from "./components/Events";
import getEvents from "./services/getEvents";
import Toolbar from "./components/Toolbar";

const colors = {
    lavenderGray: "#C9CAD9",
    lavenderBlue: "#D1D2F9",
    babyBlueEyes: "#A3BCF9",
    blueGray: "#7796CB",
    darkBlueGray: "#576490",
};

const styles = {
    global: {
        body: {
            bg: "lavenderGray",
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
            <Box p="0.2rem" bg="lavenderBlue">
                <Heading as="h2" size="3xl">
                    PLANIT
                </Heading>
            </Box>

            <Box w="100%" h="16rem">
                <Image
                    objectFit="cover"
                    boxSize="100%"
                    src="med-mhamdi-mH_E0K581Yk-unsplash.jpg"
                    alt="club photo"
                />
            </Box>
            <Toolbar />
            <Events events={events} />
        </ChakraProvider>
    );
};

export default App;
