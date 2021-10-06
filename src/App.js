import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
//----MainPage-------
// import MovieExpl from './components/MoviesExpl/MovieExpl'

//testing Api
//Nav
import NavBar from "./components/NavBar";
// import Apitest from './components/Apitest';
//Lnding Page
import Landing from "./components/Landing/Landing";
// //Header
// import MainHeader from './components/MainHeader';
//TvShow
import TvShow from "./Pages/TvShow";
import MovieExpl from "./components/MoviesExpl/MovieExpl";
const App = () => {

  return (
    <>
    {/* <Apitest/> */}
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={Landing } exact></Route>
          <Route path="/TvShow" component={TvShow} exact></Route>
          <Route path="/MovieExpl/:_id" component={MovieExpl} exact ></Route>
          <Redirect to="/" />
        </Switch>

      </Router>




      {/* <MovieExpl/>
     <Apitest/> */}

      {/* <Landing /> */}
    </>
  );
}

export default App;
