const sortPrices = (events, sorter) => {
    events.sort((eventA, eventB) => {
        const aPrice = eventA.priceRanges?.[0].min || 0;
        const bPrice = eventB.priceRanges?.[0].min || 0;
        if (sorter === "low") {
            return aPrice - bPrice;
        }

        if (sorter === "high") {
            return bPrice - aPrice;
        }
    });
    return events;
};

export default sortPrices;
