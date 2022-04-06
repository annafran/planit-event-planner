import { Select, Radio, Stack, RadioGroup, Flex, Box } from "@chakra-ui/react";

const Toolbar = () => {
    return (
        <>
            <Stack
                display="flex"
                direction="row"
                justifyContent="end"
                mt="2rem"
            >
                <Select
                    placeholder="Select city"
                    mr="2rem"
                    w="10rem"
                    bg="aquamarine"
                    borderColor="mediumTurquoise"
                    variant="filled"
                >
                    <option value="option1">Barcelona</option>
                    <option value="option2">Madrid</option>
                    <option value="option3">Santiago de Compostela</option>
                </Select>
                <RadioGroup display="flex" direction="column">
                    <Stack direction="row" mr="2rem" justifyContent="center">
                        <Radio value="1">Price: low to high</Radio>
                        <Radio value="2">Price: high to low</Radio>
                    </Stack>
                </RadioGroup>
            </Stack>
        </>
    );
};

export default Toolbar;
