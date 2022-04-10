import { Select, GridItem } from "@chakra-ui/react";

const PriceSorter = ({ setSortByPrice, sortByPrice }) => {
    const onChange = (e) => {
        setSortByPrice(e.target.value);
    };

    return (
        <GridItem colStart={[1, 2, 2, 6, 6]} colEnd={[2, 3, 3, 7, 7]} w="100%">
            <Select
                placeholder="Sort price"
                value={sortByPrice}
                defaultValue="null"
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
