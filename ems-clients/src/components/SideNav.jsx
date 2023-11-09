import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function SideNav() {
    return (
        <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
            <div className="sidenav-header">
                <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html " target="_blank">
                    <img src="../assets/img/logo-ct-dark.png" className="navbar-brand-img h-100" alt="main_logo" />
                    <span className="ms-1 font-weight-bold">Argon Dashboard 2</span>
                </a>
            </div>
            <hr className="horizontal dark mt-0" />
            <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to='/' className="nav-link">
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
                            </div>
                            <span className="nav-link-text ms-1">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/employees' className="nav-link">
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10"></i>
                            </div>
                            <span className="nav-link-text ms-1">Employees</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/profile' className="nav-link ">
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="ni ni-single-02 text-dark text-sm opacity-10"></i>
                            </div>
                            <span className="nav-link-text ms-1">Profile</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidenav-footer mx-3 ">
                <Link to='login' className="btn btn-primary btn-sm mb-0 w-100" type="button">
                    Logout
                </Link>
            </div>
        </aside>
    )
}
