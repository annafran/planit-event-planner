import Event from "./Event";
import { Grid, Box, Spinner, Stack } from "@chakra-ui/react";

const Events = ({ events }) => {
    return (
        <Box m="2rem">
            <Grid
                templateColumns={[
                    "1fr",
                    "1fr",
                    "repeat(2, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                    "repeat(4, 1fr)",
                    "repeat(5, 1fr)",
                ]}
                gap="2rem"
                templateRows="auto"
                w={["90%", "70%", "80%", "70%", "80%"]}
                ml="auto"
                mr="auto"
                justifyItems="center"
            >
                {events.map((event) => {
                    return <Event key={event.id} event={event} />;
                })}
            </Grid>
        </Box>
    );
};

export default Events;
