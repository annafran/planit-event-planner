import Event from "./Event";
import { SimpleGrid, Box } from "@chakra-ui/react";

const Events = ({ events }) => {
    return (
        <Box m="2rem">
            <SimpleGrid minChildWidth="20rem" spacing="2rem">
                {events.map((event) => (
                    <Event
                        key={event.id}
                        name={event.name}
                        url={event.url}
                        image={event.images[0].url}
                        info={event.info}
                        genre={event.classifications[0].segment.name}
                        // minPrice={
                        //     event.priceRanges[0].min < event.priceRanges[1].min
                        //         ? event.priceRanges[0].min
                        //         : event.priceRanges[1].min
                        // }
                        // currency={event.priceRanges[0].currency}
                        city={event._embedded.venues[0].city.name}
                        country={event._embedded.venues[0].country.name}
                        startDate={event.dates.start.localDate}
                    />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Events;
