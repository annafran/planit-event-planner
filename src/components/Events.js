import Event from "./Event";
import { SimpleGrid } from "@chakra-ui/react";

const Events = ({ events }) => {
    console.log({ events });
    return (
        <SimpleGrid minChildWidth="20rem" spacing="2rem">
            {events.map((event) => (
                <Event
                    key={event.id}
                    name={event.name}
                    url={event.url}
                    image={event.images[0].url}
                    info={event.info}
                    genre={event.classifications[0].segment.name}
                    minPrice={event.priceRanges[1].min}
                    city={event._embedded.venues[0].city.name}
                    country={event._embedded.venues[0].country.name}
                />
            ))}
        </SimpleGrid>
    );
};

export default Events;
