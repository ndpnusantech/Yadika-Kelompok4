import React from 'react';
import { Nav } from 'react-bootstrap';
import '../asset/css/sidebar.css'


const Sidebars = () => {
    return (
        <div>
            <section id="sidebar">
                <a href="#" className="brand">
                    <span className="text">Admin Lte</span>
                </a>
                <a href="#" className="profile">
                    <img src="s.jpg" />
                    <span className="name">UserName</span>
                    <h4 className="OL">Online</h4>
                </a>
                <form action="#">
                    <div className="form-input">
                        <input type="search" placeholder="Search..." />
                        <button type="submit" className="search-btn"><i className='bx bx-search'></i></button>
                    </div>
                </form>
                <ul className="side-menu top">
                    <li className="active">
                        <a href="#">
                            <i className='bx bxs-dashboard'></i>
                            <Nav.Link className="text" href="/dashboard">Dashboard</Nav.Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bxs-shopping-bag-alt'></i>
                            <Nav.Link className="text">Widgets</Nav.Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bxs-doughnut-chart'></i>
                            <Nav.Link className="text" href='/widgets'>Layouts Option</Nav.Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-basket'></i>
                            <Nav.Link className="text">Penjualan</Nav.Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bxs-group'></i>
                            <Nav.Link className="text">Laporan</Nav.Link>
                        </a>
                    </li>
                </ul>
                <ul className="side-menu">
                    <li>
                        <a href="#">
                            <i className='bx bxs-cog'></i>
                            <span className="text">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="logout">
                            <i className='bx bxs-log-out-circle'></i>
                            <span className="text">Logout</span>
                        </a>
                    </li>
                </ul>
            </section>



            <section id="dashboard">
                <nav>
                    <i className='bx bx-menu'></i>
                    <a href="#" className="nav-link">Home</a>
                    <a href="#" className="nav-link">Contact</a>
                </nav>
            </section>
        </div>
    )
}

export default Sidebars