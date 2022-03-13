import React, { Component } from 'react'


// import link to route between pages
import { NavLink } from "react-router-dom"


export default class Navbar extends Component {
    render() {
        return (

            <section className="bgColor fontColor">

                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent  fixed-top ">

                    <div className="container fixed">

                        <NavLink className="navbar-brand" to="/">Noxe</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse " id="navbarSupportedContent">

                            <ul className="navbar-nav mr-auto ">
                                <li className="nav-item active px-2">
                                    <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item px-2">
                                    <NavLink className="nav-link" to="/movies">Movies</NavLink>
                                </li>

                                <li className="nav-item px-2">
                                    <NavLink className="nav-link" to="/TvShows">TvShows</NavLink>
                                </li>

                                <li className="nav-item px-2">
                                    <NavLink className="nav-link" to="/contact">People</NavLink>
                                </li>

                                <li className="nav-item px-2">
                                    <NavLink className="nav-link" to="/contact">About</NavLink>
                                </li>

                                <li className="nav-item px-2">
                                    <NavLink className="nav-link" to="/contact">networks</NavLink>
                                </li>

                            </ul>


                        </div>


                        <div className="d-flex justify-content-center " >


                            <form className="d-flex">
                                <input className=" borderColor form-control me-2 mr-3" type="search" placeholder="Search" aria-label="Search" />
                            </form>

                            <ul className="d-flex justify-content-center align-items-center list-unstyled mb-0">

                                <li className="nav-item active px-2">
                                    <i className="fab fa-facebook"></i>
                                </li>

                                <li className="nav-item active px-2">
                                    <i className="fab fa-spotify"></i>
                                </li>

                                <li className="nav-item active px-2">
                                    <i className="fab fa-instagram"></i>
                                </li>

                                <li className="nav-item active px-2">
                                    <i className="fab fa-youtube"></i>
                                </li>

                            </ul>



                        </div>

                    </div>

                    <ul className="d-flex justify-content-center align-items-center list-unstyled mb-0">
                        <li>
                            <NavLink className="nav-link" to="/login">
                                <button className="btn mx-3 btn-info  fontColor ">login</button>

                            </NavLink>

                        </li>

                        <li>

                            <NavLink className="nav-link" to="/Register">
                                <button className="btn  btn-info fontColor ">Register</button>

                            </NavLink>
                        </li>
                    </ul>

                </nav>



            </section>
        )
    }
}
