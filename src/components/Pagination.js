import { Button, ButtonGroup } from "@chakra-ui/react";

const Pagination = ({
    currentPage,
    eventsPerPage,
    totalEvents,
    paginate,
    loading,
}) => {
    if (loading) {
        return <></>;
    }

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ButtonGroup
            spacing="6"
            direction="row"
            mb="3rem"
            w="100%"
            justifyContent="center"
        >
            {pageNumbers.map((number) => (
                <Button
                    bg={
                        number === currentPage ? "lavenderGray" : "babyBlueEyes"
                    }
                    key={number}
                    onClick={() => {
                        paginate(number);
                    }}
                    href="!#"
                >
                    {number}
                </Button>
            ))}
        </ButtonGroup>
    );
};

export default Pagination;
