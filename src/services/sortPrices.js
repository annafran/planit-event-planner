const sortPrices = (events, sortByPrice) => {
    if (sortByPrice === "null") {
        return events;
    }
    console.log({ sortByPrice, event: events[0] });
    events.sort((eventA, eventB) => {
        const aPrice = eventA.priceRanges?.[0].min || 0;
        const bPrice = eventB.priceRanges?.[0].min || 0;
        if (sortByPrice === "low") {
            return aPrice - bPrice;
        }

        if (sortByPrice === "high") {
            return bPrice - aPrice;
        }
        if (sortByPrice === "null") {
            return 0;
        }
    });
    return events;
};

export default sortPrices;
