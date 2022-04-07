const formattedDate = (startDate) => {
    const year = startDate.slice(0, 4);
    const month = startDate.slice(5, 7);
    const formattedMonth = (month) => {
        switch (month) {
            case "01":
                return "January";
            case "02":
                return "February";
            case "03":
                return "March";
                break;
            case "04":
                return "April";
            case "05":
                return "May";
            case "06":
                return "June";
            case "07":
                return "July";

            case "08":
                return "August";

            case "09":
                return "September";

            case "10":
                return "October";

            case "11":
                return "November";

            case "12":
                return "December";
        }
    };

    const day = startDate.slice(8, 10);
    const newDate = `${day} ${formattedMonth(month)} ${year}`;
    return newDate;
};
export default formattedDate;
