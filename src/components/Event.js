const Event = ({ name, url, image, info }) => {
    console.log({ info });

    return (
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src={image} alt={name} />
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{name}</p>
                        <a class="subtitle is-6" href={url}>
                            event page
                        </a>
                    </div>
                </div>

                <div class="content">
                    {info}
                    <br></br>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
        </div>
    );
};

export default Event;
