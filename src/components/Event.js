import CardImage from "./CardImage";

const Event = ({ name, url, image, info }) => {
    console.log({ info });

    return (
        <div>
            <li className="eventCard">
                <CardImage src={image} name={name} />
                {/* <div className="cardImageContainer">
                    <figure className="cardImage">
                        <img src={image} alt={name} />
                    </figure>
                </div> */}
                <div className="cardContent">
                    <div className="cardText">
                        <p className="cardName">{name}</p>
                        <a className="cardUrl" href={url}>
                            event page
                        </a>
                    </div>
                    <div className="cardDetails">
                        {info}
                        <br></br>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default Event;
