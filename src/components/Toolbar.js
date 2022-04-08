import { Select, Grid, GridItem } from "@chakra-ui/react";
import CountrySelector from "./CountrySelector";

const Toolbar = ({ onCountryChange }) => {
    return (
        <>
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
                <GridItem w="100%">
                    <Select
                        placeholder="Select date"
                        bg="steelPink"
                        color="white"
                        variant="filled"
                        _hover={{ bg: "violetWeb" }}
                        _focus={{ bg: "violetWeb" }}
                    >
                        <option value="today">Today</option>
                        <option value="tomorrow">Tomorrow</option>
                        <option value="thisWeekend">This weekend</option>
                        <option value="customDate">Pick a date</option>
                    </Select>
                </GridItem>
                <GridItem w="100%">
                    <Select
                        placeholder="Select genre"
                        bg="steelPink"
                        color="white"
                        variant="filled"
                        _hover={{ bg: "violetWeb" }}
                        _focus={{ bg: "violetWeb" }}
                    >
                        <option value="music">Music</option>
                        <option value="film">Film</option>
                        <option value="thisWeekend">This weekend</option>
                        <option value="customDate">Pick a date</option>
                    </Select>
                </GridItem>
                <GridItem w="100%">
                    <Select
                        placeholder="Sort by"
                        bg="steelPink"
                        color="white"
                        variant="filled"
                        _hover={{ bg: "violetWeb" }}
                        _focus={{ bg: "violetWeb" }}
                    >
                        <option value="low">Price: low to high</option>
                        <option value="high">Price: high to low</option>
                    </Select>
                </GridItem>
            </Grid>
        </>
    );
};

export default Toolbar;
