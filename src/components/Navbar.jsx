import React from "react";
import logoNBlanc from "../assets/img/logoNBlanc.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faCalendarAlt, faUserPlus, faUsers, faCog,faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function Navbar() {



    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion">
            <a className="sidebar-brand d-flex align-items-center justify-content-center">
                <img src={logoNBlanc} alt="Logo" />
            </a>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item active">
                <a className="nav-link">
                    <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
                    <span>Tableau de bord</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                    <span>Calendrier</span>
                </a>
            </li>
            <hr className="sidebar-divider" />
            <div className="sidebar-heading HiddenMobile">
                Client
            </div>
            <li className="nav-item HiddenMobile">
                <a className="nav-link">
                    <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                    <span>Nouveau client</span>
                </a>
            </li>
            <li className="nav-item HiddenMobile">
                <a className="nav-link">
                    <FontAwesomeIcon icon={faUsers} className="mr-2" />
                    <span>Liste clients</span>
                </a>
            </li>
            <hr className="sidebar-divider HiddenMobile displayTicket" />
            <div className="sidebar-heading  displayTicket">
                Ticket
            </div>
            <li className="nav-item HiddenMobile displayTicket">
                <a className="nav-link collapsed">
                    <FontAwesomeIcon icon={faCog} className="mr-2" />
                    <span>Routines</span>
                </a>
            </li>
            <li className="nav-item active displayTicket">
                <a className="nav-link">
                    <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
                    <span>Nouveau ticket</span>
                </a>
            </li>
        </ul>
    );
}

export default Navbar
