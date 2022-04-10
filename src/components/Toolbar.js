import { Grid } from "@chakra-ui/react";
import CountrySelector from "./CountrySelector";
import DateFilter from "./DateFilter";
// import DateSelector from "./DateSelector";
import PriceSorter from "./PriceSorter";

import "react-datepicker/dist/react-datepicker.css";

const Toolbar = ({
    onCountryChange,
    // dateOption,
    // setDateOption,
    setSortByPrice,
    sortByPrice,
    setSelectedDate,
    selectedDate,
}) => {
    return (
        <Grid
            display="grid"
            gap="1rem"
            mt="2rem"
            mr="2rem"
            ml="2rem"
            templateColumns={[
                "1fr",
                "repeat(3, 1fr)",
                "null",
                "repeat(6, 1fr)",
                "null",
            ]}
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

            {/* <DateSelector
                dateOption={dateOption}
                setDateOption={setDateOption}
            /> */}
        </Grid>
    );
};

export default Toolbar;
