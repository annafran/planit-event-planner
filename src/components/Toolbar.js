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
                "1fr",
                "repeat(3, 1fr)",
                "null",
                "repeat(6, 1fr)",
                "null",
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
