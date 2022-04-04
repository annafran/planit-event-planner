import Event from "./Event";

const Events = ({ events }) => {
    console.log({ events });
    return (
        <div>
            <ul className="eventGrid">
                {events.map((event) => (
                    <Event
                        key={event.id}
                        name={event.name}
                        url={event.url}
                        image={event.images[0].url}
                        info={event.info}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Events;
