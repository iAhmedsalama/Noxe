import React, { Component } from 'react'
// import About from './component/About/About'
// import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'
import Home from './component/Home/Home'
import Navbar from './component/Navbar/Navbar'
import { Route, Switch, Redirect } from "react-router-dom"

import NotFound from './component/NotFound/NotFound'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import Movies from './component/Movies/Movies'
import TvShows from './component/TvShows/TvShows'

import ProtectedRoutes from './component/ProtectedRoutes/ProtectedRoutes'


export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />

        <Switch>
          <ProtectedRoutes path="/home" component={Home} />
          <ProtectedRoutes path="/TvShows" component={TvShows} />
          <ProtectedRoutes path="/movies" component={Movies} />
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
          <Redirect exact from="/" to="/Register"></Redirect>
          <Route path="*" component={NotFound} />
        </Switch>

        <Footer />

      </>
    )
  }
}
