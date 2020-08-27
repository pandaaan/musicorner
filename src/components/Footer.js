import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faHome } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer class="footer">
                <div class="container  navi-icon d-flex justify-content-around ">
                    <NavLink exact to="/" activeClassName="selected" className="a-menu"><p> <FontAwesomeIcon icon={faHome} /></p> </NavLink>

                    <NavLink to="/bestof" activeClassName="selected" className="a-menu"> <p> <FontAwesomeIcon icon={faFolderOpen} /></p></NavLink>
                </div>
            </footer>
        );
    }

}

export default Footer;
