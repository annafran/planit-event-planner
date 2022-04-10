import { Button, GridItem } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import formatSelectedDatePicker from "../utils/formatSelectedDatePicker";
import "react-datepicker/dist/react-datepicker.css";
// import "../../src/DatePicker";

const DateSelectorV2 = ({ selectedDate, setSelectedDate }) => {
    return (
        <GridItem colStart={[1, 2, 2, 4, 4]} colEnd={[2, 3, 3, 5, 5]} w="100%">
            <DatePicker
                selectedDate={selectedDate}
                placeholderText={
                    selectedDate === null
                        ? "Select a date"
                        : formatSelectedDatePicker(selectedDate)
                }
                onChange={(date) => {
                    setSelectedDate(date);
                }}
                dateFormat="yyyy/MM/dd"
            />
            <Button w="10%" onClick={() => setSelectedDate(null)}>
                Reset
            </Button>
        </GridItem>
    );
};
export default DateSelectorV2;
