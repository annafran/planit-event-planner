import { Grid, Box } from "@chakra-ui/react";
import CountrySelector from "./CountrySelector";
import DateFilter from "./DateFilter";
import PriceSorter from "./PriceSorter";

import "react-datepicker/dist/react-datepicker.css";

const Toolbar = ({
    onCountryChange,
    setSortByPrice,
    sortByPrice,
    setSelectedDate,
    selectedDate,
}) => {
    return (
        <Box m="2rem">
            <Grid
                templateColumns={[
                    "1fr",
                    "null",
                    "repeat(3, 1fr)",
                    "null",
                    "auto 15rem 15rem 15rem",
                    "null",
                ]}
                gap={["1rem", "null", "2rem"]}
                w={["90%", "70%"]}
                ml="auto"
                mr="auto"
                justifyItems="center"
            >
                <DateFilter
                    setSelectedDate={setSelectedDate}
                    selectedDate={selectedDate}
                />
                <CountrySelector onCountryChange={onCountryChange} />
                <PriceSorter
                    setSortByPrice={setSortByPrice}
                    sortByPrice={sortByPrice}
                />
            </Grid>
        </Box>
    );
};

export default Toolbar;
