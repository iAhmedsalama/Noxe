
import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className='d-flex justify-content-around align-items-center'>
                    <h6 className="text-white text-center py-5 ">
                        CopyRights Reserved for Noxe @2022
                    </h6>

                    <div>
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
            </>
        )
    }
}
