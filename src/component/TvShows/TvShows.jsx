import React, { Component } from 'react'
import axios from 'axios'


export default class TvShows extends Component {


    state = {
        tv: []
    }
    gettvShows = async (mediaType) => {


        let { data } = await axios.get(`https://api.theMoviedb.org/3/trending/${mediaType}/day?api_key=52bbcddeda849047525b51d6f8a12361`)

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

                                <div key={index} className="col-md-2">
                                    <div className="item">
                                        <img className="w-100" src={'https://image.tmdb.org/t/p/original' + value.poster_path} alt="" />
                                        <h5>{value?.title} {value?.name}</h5>

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
