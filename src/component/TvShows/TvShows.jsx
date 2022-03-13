// @ts-nocheck
import React, { Component } from 'react'
import axios from 'axios'
import key from '../config/keys'


export default class TvShows extends Component {


    state = {
        tv: []
    }
    gettvShows = async (mediaType) => {


        let { data } = await axios.get(`https://api.theMoviedb.org/3/trending/${mediaType}/day?api_key=${key.module.mykey}`)

        this.setState({
            [mediaType]: data.results
        })
    }

    componentDidMount() {

        this.gettvShows('tv');
    }

    render() {
        return (
            <>
                <div className="container mt-100">
                    <div className="row mt-100 ">



                        <div className="col-md-4">
                            <div className="item">

                                <div className="brdr w-25"></div>
                                <h1>Trending <br /> Tv <br /> to watch now</h1>
                                <p className="secondFontColor" >most watched Tv by day</p>
                                <div className="brdr w-100"></div>

                            </div>
                        </div>
                        {this.state.tv.map((value, index) => {
                            return (

                                <div key={index} className="col-sm-12 col-md-4 py-3">
                                    <div className="item">
                                        <img className="w-100" src={'https://image.tmdb.org/t/p/original' + value.poster_path} alt="" />
                                        <h5 className='py-2'>{value?.title} {value?.name}</h5>
                                        <div className='rating_Tv'>{value?.vote_average}</div>
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
