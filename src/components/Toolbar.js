import { Select, Radio, Stack, RadioGroup } from "@chakra-ui/react";

const Toolbar = () => {
    return (
        <>
            <Stack direction="row">
                <Select
                    placeholder="Select city"
                    mt="1.5rem"
                    ml="1.5rem"
                    w="10rem"
                    bg="babyBlueEyes"
                    borderColor="babyBlueEyes"
                    variant="filled"
                >
                    <option value="option1">Barcelona</option>
                    <option value="option2">Madrid</option>
                    <option value="option3">Santiago de Compostela</option>
                </Select>
                <RadioGroup>
                    <Stack direction="row">
                        <Radio value="1">Price: low to high</Radio>
                        <Radio value="2">Price: high to low</Radio>
                    </Stack>
                </RadioGroup>
            </Stack>
        </>
    );
};

export default Toolbar;
