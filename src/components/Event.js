import {
    Button,
    LinkOverlay,
    Box,
    Badge,
    Image,
    AspectRatio,
} from "@chakra-ui/react";

const Event = ({ name, url, image, info, minPrice, genre, city, country }) => {
    console.log({ info });

    return (
        <Box
            maxW="sm"
            height="25rem"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
        >
            <AspectRatio maxW="25rem" ratio={4 / 3}>
                <Image src={image} alt={name} />
            </AspectRatio>

            <Box p="6">
                <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" bg="lavenderBlue">
                        {genre}
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        {city} &bull; {country}
                    </Box>
                </Box>

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {name}
                </Box>

                <Box>from: ${minPrice}</Box>
                <Button variant="solid" size="sm" bg="babyBlueEyes">
                    <LinkOverlay href={url}>Find out more</LinkOverlay>
                </Button>
            </Box>
        </Box>
    );
};

export default Event;
