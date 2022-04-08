import { Select, GridItem } from "@chakra-ui/react";

const CountrySelector = ({ onCountryChange }) => {
    const onChange = (e) => {
        onCountryChange(e.target.value);
    };

    const countries = [
        { id: 1, country: "United States of America", countryCode: "US" },
        { id: 2, country: "Spain", countryCode: "ES" },
    ];

    return (
        <GridItem colStart={[1, 1, 1, 1, 5]} colEnd={[2, 2, 2, 2, 6]} w="100%">
            <Select
                placeholder="Select country"
                bg="steelPink"
                color="white"
                variant="filled"
                _hover={{ bg: "violetWeb" }}
                _focus={{ bg: "violetWeb" }}
                onChange={onChange}
            >
                {countries.map((country) => (
                    <option key={country.id} value={country.countryCode}>
                        {country.country}
                    </option>
                ))}
            </Select>
        </GridItem>
    );
};
export default CountrySelector;
