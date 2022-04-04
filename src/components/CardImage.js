import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

// Exports
export const AspectRatio = AspectRatioPrimitive;

// Your app...
const Box = styled("div", {});
const Img = styled("img", {
    objectFit: "cover",
    width: "100%",
    height: "100%",
});

const CardImage = ({ src, name }) => (
    <Box
        css={{
            width: "100%",
            overflow: "hidden",
            boxShadow: `0 2px 10px ${blackA.blackA7}`,
        }}
    >
        <AspectRatio.Root ratio={16 / 9}>
            <Img src={src} alt={name} />
        </AspectRatio.Root>
    </Box>
);

export default CardImage;
