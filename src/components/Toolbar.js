import { Grid } from "@chakra-ui/react";
import CountrySelector from "./CountrySelector";
import DateSelector from "./DateSelector";
import PriceSorter from "./PriceSorter";

const Toolbar = ({
    onCountryChange,
    dateOption,
    setDateOption,
    setSortByPrice,
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
            <PriceSorter setSortByPrice={setSortByPrice} />
        </Grid>
    );
};

export default Toolbar;
