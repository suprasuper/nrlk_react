import React from 'react';

const Topbar = ({ prenom, nom, picture, idUtilisateur, sousdomaine, role }) => {
  const isAdmin = role === 'admin';

  const imageSrc = picture
    ? `https://cloud.niralakka.fr/${sousdomaine}/utilisateur/${idUtilisateur}/${picture}`
    : '/img/profil.jpeg'; // assure-toi que ce chemin est correct

  return (
    <>
      {/* Topbar */}
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* Sidebar Toggle (Topbar) */}
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>

        {/* Topbar Search */}
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <select className="form-control form-control-user" name="listClient" id="listClient">
              <option>Chargement des clients...</option>
            </select>
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>

        {/* Topbar Navbar */}
        <ul className="navbar-nav ml-auto">
          {/* Search Dropdown (XS only) */}
          <li className="nav-item dropdown no-arrow d-sm-none">
            <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown">
              <i className="fas fa-search fa-fw"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <select className="form-control form-control-user" name="listClientMobile" id="listClientMobile">
                    <option>Chargement des clients...</option>
                  </select>
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          {/* Admin config button */}
          {isAdmin && (
            <li className="nav-item no-arrow HiddenMobile">
              <a className="nav-link" href="/administration.php">
                <i className="fas fa-users-cog fa-fw"></i>
              </a>
            </li>
          )}

          {/* Notifications */}
          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown">
              <i className="fas fa-bell fa-fw"></i>
              <span id="nbNotification" className="badge badge-danger badge-counter"></span>
            </a>
            <div id="dropdownNotification" className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
              {/* Notifs à remplir dynamiquement */}
            </div>
          </li>

          <div className="topbar-divider d-none d-sm-block"></div>

          {/* User info */}
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                {prenom} {nom}
              </span>
              <img className="img-profile rounded-circle" src={imageSrc} alt="profil" />
            </a>
            <div className="dropdown-menu no-arrow dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <a className="dropdown-item" href="/mon-activite.php">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Mon activité
              </a>
              <a className="dropdown-item" href="/modifier-profil.php">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Modifier mes informations
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Déconnexion
              </a>
            </div>
          </li>
        </ul>
      </nav>

      {/* Zone alertes */}
      <div id="alerteZone" style={{ marginTop: 'calc(4.375rem + 10px)', position: 'fixed', right: 10, zIndex: 99999 }}></div>

      {/* Scroll to top */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </>
  );
};

export default Topbar;
