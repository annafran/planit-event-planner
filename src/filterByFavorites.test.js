const filterByFavorites = require("./services/filterByFavorites");

describe("filterByFavorites", () => {
    it("Should only return events that have been saved as a favorite", () => {
        const filterFavorites = "favorites";
        const events = [
            {
                name: "Wellington Saints v Tuatara",
                id: "G5e8ZpMUl4Nvh",
                dates: {
                    start: {
                        dateTBA: false,
                        dateTBD: false,
                        dateTime: "2022-05-16T06:30:00Z",
                        localDate: "2022-05-16",
                        localTime: "18:30:00",
                        noSpecificTime: false,
                        timeTBA: false,
                    },
                },
                images: [
                    {
                        fallback: false,
                        height: 56,
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/353/00048445-d264-4a27-956d-075ad5be5353_1315221_RECOMENDATION_16_9.jpg",
                        width: 100,
                    },
                    {
                        fallback: false,
                        height: 576,
                        ratio: "16_9",
                        url: "https://s1.ticketm.net/dam/a/353/00048445-d264-4a27-956d-075ad5be5353_1315221_TABLET_LANDSCAPE_16_9.jpg",
                        width: 1024,
                    },
                ],
                favorite: true,
            },
            {
                name: "Historical Music Venues Tour - Karangahape Road to Aotea Square",
                id: "ZFwVzcymWZ177z0x",
                dates: {
                    start: {
                        dateTBA: false,
                        dateTBD: false,
                        dateTime: "2022-05-21T22:00:00Z",
                        noSpecificTime: false,
                        timeTBA: false,
                    },
                    images: [
                        {
                            fallback: true,
                            height: 225,
                            ratio: "4_3",
                            url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_CUSTOM.jpg",
                            width: 305,
                        },
                        {
                            fallback: false,
                            height: 300,
                            ratio: "4_3",
                            url: "https://d3q2evcom5wecg.cloudfront.net/uploads/bdd99df2-b095-45a6-9b9c-a2666b44a784x300x400",
                            width: 400,
                        },
                    ],
                    favorite: false,
                },
            },
        ];
        const result = filterByFavorites(events, filterFavorites);
        const expected = {
            name: "Wellington Saints v Tuatara",
            id: "G5e8ZpMUl4Nvh",
            dates: {
                start: {
                    dateTBA: false,
                    dateTBD: false,
                    dateTime: "2022-05-16T06:30:00Z",
                    localDate: "2022-05-16",
                    localTime: "18:30:00",
                    noSpecificTime: false,
                    timeTBA: false,
                },
            },
            images: [
                {
                    fallback: false,
                    height: 56,
                    ratio: "16_9",
                    url: "https://s1.ticketm.net/dam/a/353/00048445-d264-4a27-956d-075ad5be5353_1315221_RECOMENDATION_16_9.jpg",
                    width: 100,
                },
                {
                    fallback: false,
                    height: 576,
                    ratio: "16_9",
                    url: "https://s1.ticketm.net/dam/a/353/00048445-d264-4a27-956d-075ad5be5353_1315221_TABLET_LANDSCAPE_16_9.jpg",
                    width: 1024,
                },
            ],
            favorite: true,
        };
        expect(result).toEqual(expected);
    });
});
