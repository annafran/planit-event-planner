import { Button, GridItem } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import formatFilteredDate from "../utils/formatFilteredDate";
import "react-datepicker/dist/react-datepicker.css";
import "../../src/DatePicker.css";

const DateFilter = ({ selectedDate, setSelectedDate }) => {
    return (
        <GridItem
            colStart={[1, 2, 2, 4, 4]}
            colEnd={[2, 3, 3, 5, 5]}
            w="100%"
            display="flex"
            direction="row"
        >
            <DatePicker
                className="datePicker"
                selectedDate={selectedDate}
                todayButton="Today"
                placeholderText={
                    selectedDate === null
                        ? "Select a date"
                        : formatFilteredDate(selectedDate)
                }
                onChange={(date) => {
                    setSelectedDate(date);
                }}
                dateFormat="yyyy/MM/dd"
            />
            <Button
                w="fit-content"
                bg="steelPink"
                color="white"
                variant="filled"
                borderRadius="0 0.375rem 0.375rem 0"
                _hover={{ bg: "violetWeb" }}
                _focus={{ bg: "violetWeb" }}
                onClick={() => setSelectedDate(null)}
            >
                Reset
            </Button>
        </GridItem>
    );
};
export default DateFilter;
