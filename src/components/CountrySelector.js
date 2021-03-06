import { useState } from "react";
import { Select, GridItem } from "@chakra-ui/react";

const CountrySelector = ({ setCurrentCountry }) => {
    const [selected, setSelected] = useState("");

    const onChange = (e) => {
        setCurrentCountry(e.target.value);
        setSelected(e.target.value);
    };

    const countries = [
        { country: "Australia", countryCode: "AU" },
        { country: "Canada", countryCode: "CA" },
        { country: "Germany", countryCode: "DE" },
        { country: "Great Britain", countryCode: "GB" },
        { country: "Ireland", countryCode: "IE" },
        { country: "Mexico", countryCode: "MX" },
        { country: "Netherlands", countryCode: "NL" },
        { country: "New Zealand", countryCode: "NZ" },
        { country: "Spain", countryCode: "ES" },
        { country: "Sweden", countryCode: "SE" },
        { country: "United States of America", countryCode: "US" },
    ];

    return (
        <GridItem colStart={[1, 1, 2]} colEnd={[2, 2, 3]} w="100%">
            <Select
                placeholder="Select country"
                bg="steelPink"
                color="white"
                variant="filled"
                _hover={{ bg: "violetWeb" }}
                _focus={{ bg: "violetWeb" }}
                onChange={onChange}
                value={selected}
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
