import CardImage from "./CardImage";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Event = ({ name, url, image, info }) => {
    console.log({ info });

    return (
        <div>
            <li className="eventCard">
                <CardImage src={image} name={name} />
                <div className="cardContent">
                    <div className="cardText">
                        <Typography variant="h5" gutterBottom="true" className="cardName">{name}</Typography>
                    </div>
                    <Typography variant="caption" className="cardDetails">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quaerat non cupidis vitae culpa dolorem dicta explicabo a.</Typography>
                    <Button variant="contained" color="secondary" href={url}>
                        Find out more
                    </Button>
                </div>
            </li>
        </div>
    );
};

export default Event;
