const formattedDate = (startDate) => {
    const year = startDate.slice(0, 4);
    const month = startDate.slice(5, 7);
    const day = startDate.slice(8, 10);
    const newDate = `${day}-${month}-${year}`;
    return newDate;
};
export default formattedDate;
