import { React, useState, useEffect } from "react";
import "./App.css";
import Events from "./components/Events";
import getEvents from "./services/getEvents";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#7796CB",
        },
        secondary: {
            // This is green.A700 as hex.
            main: "#A3BCF9",
        },
    },
});

function App() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            setEvents(await getEvents());
        };

        loadData();
    }, []);

    return (
        <div>
            <header className="mainHeader">
                <h1>PLANIT</h1>
            </header>
            <div className="banner"></div>
            <Events events={events} />
        </div>
    );
}

const AppWrapper = () => {
    return (
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    );
};

export default AppWrapper;
