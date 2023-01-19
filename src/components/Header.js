import React, { useContext} from 'react';
import AppContext from '../context/contextProvider';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const state = useContext(AppContext);

    return (
        <h3>
            <header>
                <NavLink to="/" activeClassName={'homeLinkActive'} className={'homeLink'}>Podcaster</NavLink>
                {state.isNavigating && <div>Cargando <span id="loaderDot"></span></div>}
            </header>
        </h3>
  );
}
export {Header};