import { Grid, Box } from "@chakra-ui/react";
import CountrySelector from "./CountrySelector";
import DateFilter from "./DateFilter";
import Sorter from "./Sorter";
import Favorites from "./Favorites";

import "react-datepicker/dist/react-datepicker.css";

const Toolbar = ({
    setCurrentCountry,
    setSorter,
    setSelectedDate,
    selectedDate,
    setFilterFavorites,
}) => {
    return (
        <Box m="2rem">
            <Grid
                templateColumns={[
                    "1fr",
                    "null",
                    "repeat(4, 1fr)",
                    "null",
                    "15rem 15rem 15rem 15rem",
                    "null",
                ]}
                gap={["1rem", "null", "2rem"]}
                w={["90%", "70%", "100%", "100%", "90%"]}
                ml="auto"
                mr="auto"
                justifyItems="center"
                justifyContent="center"
            >
                <DateFilter
                    setSelectedDate={setSelectedDate}
                    selectedDate={selectedDate}
                />
                <CountrySelector setCurrentCountry={setCurrentCountry} />
                <Sorter setSorter={setSorter} />
                <Favorites setFilterFavorites={setFilterFavorites} />
            </Grid>
        </Box>
    );
};

export default Toolbar;
