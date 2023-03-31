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
                <ul class="side-menu top">
                    <li class="active">
                        <a href="#">
                            <i class='bx bxs-dashboard'></i>
                            <Nav.Link class="text" href="/dashboard">Dashboard</Nav.Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxs-shopping-bag-alt'></i>
                            <Nav.Link class="text">Widgets</Nav.Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxs-doughnut-chart'></i>
                            <Nav.Link class="text" href="/widgets">Layouts Option</Nav.Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-basket'></i>
                            <Nav.Link class="text">Penjualan</Nav.Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxs-group'></i>
                            <Nav.Link class="text">Laporan</Nav.Link>
                        </a>
                    </li>
                </ul>
                <ul class="side-menu">
                    <li>
                        <a href="#">
                            <i class='bx bxs-cog'></i>
                            <Nav.Link class="text">Settings</Nav.Link>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="logout">
                            <i class='bx bxs-log-out-circle'></i>
                            <Nav.Link class="text">Logout</Nav.Link>
                        </a>
                    </li>
                </ul>

               
            </section>
        </div>
    )
}

export default Sidebars