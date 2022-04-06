import CardImage from "./CardImage";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { LinkOverlay } from "@chakra-ui/react";

const Event = ({ name, url, image, info }) => {
    console.log({ info });

    return (
        <div>
            <li className="eventCard">
                <CardImage src={image} name={name} />
                <div className="cardContent">
                    <div className="cardText">
                        <Text fontSize="lg">{name}</Text>
                    </div>
                    <Button variant="solid" size="sm" bg="brand.babyBlueEyes">
                        <LinkOverlay href={url}>Find out more</LinkOverlay>
                    </Button>
                </div>
            </li>
        </div>
    );
};

export default Event;
