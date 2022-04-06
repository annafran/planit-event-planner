import { Box, Heading } from "@chakra-ui/react";

const Header = () => {
    return (
        <Box p="0.2rem" bg="blue.400" color="aquamarine">
            <Heading as="h2" size="2xl" ml="2rem" mt="0.5rem" mb="0.5rem">
                PLANIT
            </Heading>
        </Box>
    );
};

export default Header;
