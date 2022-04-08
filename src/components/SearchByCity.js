import { GridItem, Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const SearchByCity = () => {
    return (
        <GridItem w="100%">
            <Input
                placeholder="Search by city"
                leftIcon={<Search2Icon />}
                variant="filled"
                _focus={{ bg: "white", borderColor: "white" }}
                // onChange={onChange}
            />
        </GridItem>
    );
};

export default SearchByCity;
