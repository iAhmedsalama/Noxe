// @ts-nocheck
import React, { Component } from 'react'
import axios from 'axios';



export default class Movies extends Component {

    state = {
        Movies: []
    }
    getTrending = async (mediaType) => {

        let { data } = await axios.get(`https://api.theMoviedb.org/3/trending/${mediaType}/day?api_key=52bbcddeda849047525b51d6f8a12361`)
        console.log(mediaType);

        this.setState({
            [mediaType]: data.results
        })
    }
    componentDidMount() {
        this.getTrending("Movies");
    }

    render() {
        // console.log(this.state);

        return (

            <>
                <div className="container  mt-100">
                    <div className="row  mt-100 ">

                        <div className="col-md-4">
                            <div className="item">

                                <div className="brdr w-25"></div>
                                <h1>Trending <br /> Movies <br /> to watch now</h1>
                                <p className="secondFontColor" >most watched Movies by day</p>
                                <div className="brdr w-100"></div>

                            </div>
                        </div>


                        {this.state.Movies.map((value, index) => {
                            return (
                                <div key={index} className="col-md-2 py-3">
                                    <div className="item">
                                        <img className="w-100" src={'https://image.tmdb.org/t/p/original' + value.poster_path} alt="" />
                                        <h5 className='py-2'>{value?.original_title} {value?.name}</h5>
                                        <p><span className='text-uppercase' style={{ color: '#09c' }}>overview:</span> {value?.overview}</p>
                                        <div className='rating'>{value?.vote_average}</div>
                                        <div></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>





                </div>


            </>

        )
    }






}
