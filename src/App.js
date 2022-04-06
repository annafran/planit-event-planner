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
            <Box p="0.2rem" bg="darkBlueGray" color="aquamarine">
                <Heading as="h2" size="2xl" ml="2rem" mt="0.5rem" mb="0.5rem">
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
