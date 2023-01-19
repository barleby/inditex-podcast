const PodcastCard = ({...props}) => {

    const
        podcast = props.podcast,
        handleClick = () => props.history.push(`/podcast/${podcast.id.attributes['im:id']}`);

    return (
        <li className="card" key={podcast.id.attributes['im:id']} onClick={handleClick}>
            <div>
                <img
                    src={podcast['im:image'][2].label}
                    width={podcast['im:image'][2].attributes.height}
                    height={podcast['im:image'][2].attributes.height}
                    alt={podcast['im:image'][2].label}

                />
                <p className="title">{podcast['im:name'].label}</p>
                <p className="author">Author: {podcast['im:artist'].label}</p>
            </div>
        </li>
    )
};

export {PodcastCard};