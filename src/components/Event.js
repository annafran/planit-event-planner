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

const Event = ({ event }) => {
    const {
        name,
        url,
        images,
        classifications = [],
        priceRanges = [],
        _embedded = { venues: [] },
        dates,
    } = event;

    const getImage = () => {
        if (images.length > 0) {
            return images[0].url;
        }

        return "";
    };

    const getGenre = () => {
        if (classifications.length > 0) {
            return classifications[0].genre?.name || "Miscellaneous";
        }

        return "Miscellaneous";
    };

    const getMinPrice = () => {
        if (priceRanges.length > 1) {
            return priceRanges[0].min < priceRanges[1].min
                ? priceRanges[0].min
                : priceRanges[1].min;
        }

        if (priceRanges.length > 0) {
            return priceRanges[0].min;
        }
        return 0;
    };

    const getCurrency = () => {
        if (priceRanges.length > 0) {
            return priceRanges[0].currency;
        }
        return "EUR";
    };

    const getCity = () => {
        if (_embedded.venues.length > 0) {
            return _embedded.venues[0].city.name;
        }
        return "Not listed";
    };

    const getCountry = () => {
        if (_embedded.venues.length > 0) {
            return _embedded.venues[0].country.name;
        }
        return "Not listed";
    };

    return (
        <Box
            w="100%"
            height={["fit-content", "30rem"]}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="white"
        >
            <AspectRatio maxW="30rem" ratio={4 / 3}>
                <Image src={getImage()} alt={name} />
            </AspectRatio>

            <Box p="6">
                <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" bg="cyan.200">
                        {getGenre()}
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        {getCity()} &bull; {getCountry()}
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
                    From {getMinPrice()} {getCurrency()}
                </Box>
                <Box>
                    {dateToday() === formattedDate(dates.start.localDate)
                        ? "Today"
                        : formattedDate(dates.start.localDate)}
                </Box>
                <Button variant="solid" size="sm" bg="babyBlueEyes" mt="1rem">
                    <LinkOverlay href={url}>Find out more</LinkOverlay>
                </Button>
            </Box>
        </Box>
    );
};

export default Event;
