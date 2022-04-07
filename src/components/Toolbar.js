import { Select, Radio, Stack, RadioGroup } from "@chakra-ui/react";

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
                    mr="0.5rem"
                    w="10rem"
                    bg="steelPink"
                    color="white"
                    variant="filled"
                >
                    <option value="option1">Barcelona</option>
                    <option value="option2">Madrid</option>
                    <option value="option3">Santiago de Compostela</option>
                </Select>
                <Select
                    placeholder="Select date"
                    mr="0.5rem"
                    w="10rem"
                    bg="steelPink"
                    color="white"
                    variant="filled"
                >
                    <option value="today">Today</option>
                    <option value="tomorrow">Tomorrow</option>
                    <option value="thisWeekend">This weekend</option>
                    <option value="customDate">Pick a date</option>
                </Select>
                <Select
                    placeholder="Select genre"
                    mr="0.5rem"
                    w="10rem"
                    bg="steelPink"
                    color="white"
                    variant="filled"
                >
                    <option value="music">Music</option>
                    <option value="film">Film</option>
                    <option value="thisWeekend">This weekend</option>
                    <option value="customDate">Pick a date</option>
                </Select>
                <RadioGroup display="flex" direction="column">
                    <Stack direction="column" mr="2rem" justifyContent="center">
                        <Radio value="1">Price: low to high</Radio>
                        <Radio value="2">Price: high to low</Radio>
                    </Stack>
                </RadioGroup>
            </Stack>
        </>
    );
};

export default Toolbar;
