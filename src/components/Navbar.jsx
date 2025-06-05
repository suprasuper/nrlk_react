import React from "react";
import logoNBlanc from "../assets/img/logoNBlanc.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faCalendarAlt,
  faUserPlus,
  faUsers,
  faCog,
  faPlusCircle,
  faTicketAlt,
  faTable,
  faTasks,
  faFolderPlus,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
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
      <div className="sidebar-heading HiddenMobile">Client</div>
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
      <div className="sidebar-heading  displayTicket">Ticket</div>
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
      <li className="nav-item  displayTicket">
        <a className="nav-link">
          <FontAwesomeIcon icon={faTicketAlt} className="mr-2" />
          <span>Tickets ouverts</span>
        </a>
      </li>
      <li className="nav-item  displayTicket">
        <a className="nav-link">
          <FontAwesomeIcon icon={faTable} className="mr-2" />
          <span>Tickets à approuver</span>
        </a>
      </li>
      <li className="nav-item  displayTicket">
        <a className="nav-link">
          <FontAwesomeIcon icon={faTicketAlt} className="mr-2" />
          <span>Tickets fermés</span>
        </a>
      </li>
      <hr className="sidebar-divider displayProjet"></hr>
      <div className="sidebar-heading displayProjet">Projet</div>
      <li className="nav-item active HiddenMobile displayProjet">
        <a
          id="addProjetBtn"
          href="#"
          data-toggle="modal"
          data-target="#addProjetModal"
          className="nav-link"
        >
          <FontAwesomeIcon icon={faFolderPlus} className="mr-2" />
          <span>Nouveau projet</span>
        </a>
      </li>
      <li className="nav-item displayProjet">
        <a className="nav-link" href="projets.php">
          <FontAwesomeIcon icon={faTasks} className="mr-2" />
          <span>Projets</span>
        </a>
      </li>
      <hr className="sidebar-divider HiddenMobile displayStatistique"></hr>
      <div className="sidebar-heading HiddenMobile displayStatistique">
        Stats
      </div>
      <li className="nav-item HiddenMobile displayStatistique">
        <a className="nav-link" href="statistiques.php">
          <FontAwesomeIcon icon={faChartLine} className="mr-2" />
          <span>Statistiques</span>
        </a>
      </li>
      <hr className="sidebar-divider d-none d-md-block"></hr>
      {/* <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div> */}
    </ul>
  );
}

export default Navbar;
