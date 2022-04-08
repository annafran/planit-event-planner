import { Select, GridItem } from "@chakra-ui/react";

const CountrySelector = ({ onCountryChange, setCurrentPage }) => {
    const onChange = (e) => {
        onCountryChange(e.target.value);
        setCurrentPage(1);
    };

    const countries = [
        { country: "United States of America", countryCode: "US" },
        { country: "Spain", countryCode: "ES" },
        { country: "Canada", countryCode: "CA" },
        { country: "Netherlands", countryCode: "NL" },
        { country: "Sweden", countryCode: "SE" },
        { country: "Mexico", countryCode: "MX" },
        { country: "Great Britain", countryCode: "GB" },
        { country: "Ireland", countryCode: "IE" },
        { country: "Germany", countryCode: "DE" },
        { country: "Australia", countryCode: "AU" },
        { country: "New Zealand", countryCode: "NZ" },
        // { country: "Turkey", countryCode: "TR" },
        { country: "Northern Ireland", countryCode: "ND" },
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
                    <option
                        key={country.countryCode}
                        value={country.countryCode}
                    >
                        {country.country}
                    </option>
                ))}
            </Select>
        </GridItem>
    );
};
export default CountrySelector;
