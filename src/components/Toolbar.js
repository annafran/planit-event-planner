import { Grid, Button } from "@chakra-ui/react";
import CountrySelector from "./CountrySelector";
import DateSelector from "./DateSelector";
import PriceSorter from "./PriceSorter";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Toolbar = ({
    onCountryChange,
    dateOption,
    setDateOption,
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
            <CountrySelector onCountryChange={onCountryChange} />
            <DateSelector
                dateOption={dateOption}
                setDateOption={setDateOption}
            />
            <PriceSorter
                setSortByPrice={setSortByPrice}
                sortByPrice={sortByPrice}
            />
            <DatePicker
                selectedDate={selectedDate}
                placeholderText="Select a date"
                onChange={(date) => {
                    setSelectedDate(date);
                }}
                dateFormat="yyyy/MM/dd"
                hidden
            />
            <Button onClick={() => setSelectedDate(null)}>Reset</Button>
        </Grid>
    );
};

export default Toolbar;
