import {
    Image,
    Box,
    Input,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";

const Banner = ({ setSearch }) => {
    const onChange = (e) => {
        if (e.target.value.length === 0 || e.target.value.length >= 2) {
            setSearch(e.target.value.toLowerCase());
        }

        return (
            <Box w="100%" h="16rem" pos="relative">
                <Image
                    objectFit="cover"
                    boxSize="100%"
                    src="med-mhamdi-mH_E0K581Yk-unsplash.jpg"
                    alt="club photo"
                />
                <InputGroup
                    pos="absolute"
                    size="lg"
                    w="40%"
                    top="40%"
                    left="30%"
                    zIndex={2}
                >
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Search2Icon color="gray" />}
                    />

                    <Input
                        placeholder="Search for an event"
                        leftIcon={<Search2Icon />}
                        variant="filled"
                        focusBorderColor="babyBlueEyes"
                        onChange={onChange}
                    />
                </InputGroup>
            </Box>
        );
    };
};

export default Banner;
