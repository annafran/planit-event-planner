import { Select, GridItem } from "@chakra-ui/react";

const PriceSorter = ({ setSortByPrice, sortByPrice }) => {
    const onChange = (e) => {
        setSortByPrice(e.target.value);
    };

    return (
        <GridItem colStart={[1, 1, 3, 3, 4]} colEnd={[2, 2, 4, 4, 5]} w="100%">
            <Select
                defaultValue="null"
                bg="steelPink"
                color="white"
                variant="filled"
                _hover={{ bg: "violetWeb" }}
                _focus={{ bg: "violetWeb" }}
                onChange={onChange}
            >
                <option value="null">Sort by:</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
                <option value="dates">Date: earliest to latest</option>
            </Select>
        </GridItem>
    );
};

export default PriceSorter;
