import { useState } from "react";
import {
    Image,
    Box,
    Input,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";

const Banner = ({ setSearch }) => {
    const [typed, setTyped] = useState("");
    const onChange = (e) => {
        if (e.target.value.length === 0 || e.target.value.length >= 2) {
            setSearch(e.target.value.toLowerCase());
        }
        setTyped(e.target.value);
    };

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
                w={["20rem", "null", "26rem"]}
                top="50%"
                left="50%"
                ml={["-10rem", "null", "-13rem"]}
                mt="-1.5rem"
                zIndex={2}
            >
                <InputLeftElement
                    pointerEvents="none"
                    children={<Search2Icon color="gray" />}
                />

                <Input
                    placeholder="Search for an event"
                    variant="filled"
                    _focus={{ bg: "white", borderColor: "white" }}
                    onChange={onChange}
                    value={typed}
                />
            </InputGroup>
        </Box>
    );
};

export default Banner;
