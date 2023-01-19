import { useEffect, useContext } from "react";
import AppContext from "../context/contextProvider";

const Nav = ({...props}) => {
    const state = useContext(AppContext);

    useEffect(() => props.history.listen((location, action) => {
        state.handleLoader(true);
      }));
    return (
        <div>
           {props.children}
        </div>
    )
};

export {Nav};