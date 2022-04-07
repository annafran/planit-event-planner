const todayDate = () => {
    let today = new Date();
    let date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    return date;
};

export default todayDate;
