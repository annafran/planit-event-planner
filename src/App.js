import { React, useState, useEffect } from "react";
import "./App.css";
import Events from "./components/Events";
import { getEvents } from "./services/getEvents";

function App() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            setEvents(await getEvents());
        };

        loadData();
    }, []);

    return (
        <div className="app">
            <header className="app-header">
                <h1>EventMe</h1>
            </header>
            <Events events={events} />
        </div>
    );
}

export default App;
