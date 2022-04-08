import { Select, GridItem } from "@chakra-ui/react";

const DateSelector = () => {
    return (
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
    );
};

export default DateSelector;
