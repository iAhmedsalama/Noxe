import React, { Component } from 'react'

import img1 from "../../imgs/slideshow-1.jpg"
import img2 from "../../imgs/slideshow-2.jpg"
import img3 from "../../imgs/slideshow-3.jpg"

// import Button from '../Button/Button'

export default class Home extends Component {

    render() {


        return (
            <>

               
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </div>

            </>
        )
    }
}
