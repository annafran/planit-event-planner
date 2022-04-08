import { Grid } from "@chakra-ui/react";
import CountrySelector from "./CountrySelector";
import DateSelector from "./DateSelector";
import SortBy from "./SortBy";

const Toolbar = ({ onCountryChange }) => {
    return (
        <Grid
            display="grid"
            gap="1rem"
            mt="2rem"
            mr="2rem"
            ml="2rem"
            templateColumns={[
                "repeat(2, 1fr)",
                "null",
                "repeat(4, 1fr)",
                "null",
                "repeat(8, 1fr)",
            ]}
            justifyItems="center"
        >
            <CountrySelector onCountryChange={onCountryChange} />
            <DateSelector />
            <SortBy />
        </Grid>
    );
};

export default Toolbar;
