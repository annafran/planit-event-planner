import { Box, Heading, Image } from "@chakra-ui/react";

const Header = () => {
    return (
        <Box
            p="0.2rem"
            bg="cyan.500"
            color="cyan.100"
            display="flex"
            direction="row"
            h={20}
        >
            <Image src="logoTrans.png" alt="logo" />
            <Heading
                as="h2"
                size="2xl"
                ml="0.5rem"
                mt="0.5rem"
                mb="0.5rem"
                alignSelf="center"
            >
                PLANIT
            </Heading>
        </Box>
    );
};

export default Header;
