import { Select, GridItem } from "@chakra-ui/react";

const SortBy = () => {
    return (
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
                <option value="high">Dates: most recent</option>
            </Select>
        </GridItem>
    );
};

export default SortBy;
