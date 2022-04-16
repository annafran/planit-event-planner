import { Select, GridItem } from "@chakra-ui/react";

const Favorites = ({ setFilterFavorites }) => {
    const onChange = (e) => {
        setFilterFavorites(e.target.value);
    };
    return (
        <GridItem colStart={[1, 1, 4]} colEnd={[2, 2, 5]} w="100%">
            <Select
                placeholder="Show:"
                bg="steelPink"
                color="white"
                variant="filled"
                _hover={{ bg: "violetWeb" }}
                _focus={{ bg: "violetWeb" }}
                onChange={onChange}
            >
                <option value="favorites">Favourites</option>
                <option value="all">All events</option>
            </Select>
        </GridItem>
    );
};

export default Favorites;
