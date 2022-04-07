import {
    Button,
    LinkOverlay,
    Box,
    Badge,
    Image,
    AspectRatio,
} from "@chakra-ui/react";

import formattedDate from "../utils/formattedDate";
import dateToday from "../utils/dateToday";

const Event = ({
    name,
    url,
    image,
    minPrice,
    genre,
    city,
    country,
    currency,
    startDate,
}) => {
    return (
        <Box
            w="100%"
            height="fit-content"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="white"
        >
            <AspectRatio maxW="30rem" ratio={4 / 3}>
                <Image src={image} alt={name} />
            </AspectRatio>

            <Box p="6">
                <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" bg="cyan.200">
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
                    mt="1rem"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {name}
                </Box>

                <Box>
                    From {minPrice} {currency}
                </Box>
                <Box>
                    {dateToday() === formattedDate(startDate)
                        ? "Today"
                        : formattedDate(startDate)}
                </Box>
                <Button variant="solid" size="sm" bg="babyBlueEyes" mt="1rem">
                    <LinkOverlay href={url}>Find out more</LinkOverlay>
                </Button>
            </Box>
        </Box>
    );
};

export default Event;
