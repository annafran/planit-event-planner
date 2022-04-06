// import CardImage from "./CardImage";
import {
    Button,
    LinkOverlay,
    Box,
    Badge,
    Image,
    SimpleGrid,
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
            <Image src={image} alt={name} />

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

        // <div>
        //     <li className="eventCard">
        //         <CardImage src={image} name={name} />
        //         <div className="cardContent">
        //             <div className="cardText">
        //                 <Text fontSize="lg">{name}</Text>
        //             </div>
        //             <Button variant="solid" size="sm" bg="brand.babyBlueEyes">
        //                 <LinkOverlay href={url}>Find out more</LinkOverlay>
        //             </Button>
        //         </div>
        //     </li>
        // </div>
    );
};

export default Event;
