import { Select, Radio, Stack, RadioGroup } from "@chakra-ui/react";

const Toolbar = () => {
    return (
        <>
            <Stack direction="row">
                <Select
                    placeholder="Select city"
                    mt="2rem"
                    ml="2rem"
                    w="10rem"
                    bg="aquamarine"
                    borderColor="mediumTurquoise"
                    variant="filled"
                >
                    <option value="option1">Barcelona</option>
                    <option value="option2">Madrid</option>
                    <option value="option3">Santiago de Compostela</option>
                </Select>
                <RadioGroup>
                    <Stack direction="row" mt="2rem" ml="1rem">
                        <Radio value="1">Price: low to high</Radio>
                        <Radio value="2">Price: high to low</Radio>
                    </Stack>
                </RadioGroup>
            </Stack>
        </>
    );
};

export default Toolbar;
