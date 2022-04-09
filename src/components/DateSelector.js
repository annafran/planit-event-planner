import { Select, GridItem } from "@chakra-ui/react";

const DateSelector = ({ setDateOption }) => {
    const onChange = (e) => {
        setDateOption(e.target.value);
    };

    return (
        <GridItem w="100%">
            <Select
                placeholder="Select date"
                bg="steelPink"
                color="white"
                variant="filled"
                _hover={{ bg: "violetWeb" }}
                _focus={{ bg: "violetWeb" }}
                onChange={onChange}
            >
                <option value="today">Today</option>
                <option value="customDate">Pick a date</option>
            </Select>
        </GridItem>
    );
};

export default DateSelector;
