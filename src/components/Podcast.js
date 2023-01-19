import { useEffect, useContext } from "react";
import AppContext from "../context/contextProvider";

const Podcast = (props) => {

    const state = useContext(AppContext);
    useEffect( () => {
        state.handleLoader(false);
    }, []);
return (
        <div>
            <p>Navigating to Podcast URL</p>
            <p>Podcast número {props.match.params.id}</p>
        </div>
    );
}

export {Podcast};