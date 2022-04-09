// const getClassifications = async () => {
//     try {
//         const url =
//             "https://app.ticketmaster.com/discovery/v2/classifications.json?apikey=6jG90DR1wOjINQitcnGMKO7gk8DJFCRD";
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`);
//         }
//         const data = await response.json();
//         const classifications = data._embedded.classifications;
//         console.log("classifications: ", classifications);
//         return classifications;
//     } catch (error) {
//         console.error(`Could not get classifications: ${error}`);
//     }
// };

// export default getClassifications;
