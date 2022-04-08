import getClassifications from "../services/getClassifications";

const getGenres = () => {
    const genres = [];
    console.log("genres1: ", genres);
    for (let classification of classifications) {
        let genre = classification.segment._embedded.genres;
        genres.push(genre);
    }
    // console.log("genres2: ", genres);
    return genres;
};

export default getGenres;
