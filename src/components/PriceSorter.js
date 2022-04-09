import { Select, GridItem } from "@chakra-ui/react";

const PriceSorter = ({ setSortByPrice }) => {
    const onChange = (e) => {
        setSortByPrice(e.target.value);
    };

    return (
        <GridItem w="100%">
            <Select
                placeholder="Sort price"
                bg="steelPink"
                color="white"
                variant="filled"
                _hover={{ bg: "violetWeb" }}
                _focus={{ bg: "violetWeb" }}
                onChange={onChange}
            >
                <option value="low">low to high</option>
                <option value="high">high to low</option>
            </Select>
        </GridItem>
    );
};

export default PriceSorter;
