const sortEvents = (events, sortBy) => {
    events.sort((eventA, eventB) => {
        const aPrice = eventA.priceRanges?.[0].min || 0;
        const bPrice = eventB.priceRanges?.[0].min || 0;
        if (sortBy === "low") {
            return aPrice - bPrice;
        }

        if (sortBy === "high") {
            return bPrice - aPrice;
        }
        return 0;
    });
    return events;
};

export default sortEvents;
