import React, { useState, useEffect } from 'react';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
//Styled Components
import { Bg, MHeader, SearchShow } from "../styleComponents/Header/Header.style";

//Adding css part
import "../styleComponents/Header/Header.style.css";

// including Cards
import Cards from './Landing/Cards';

//Configration importing
import { Upcoming_Movies, API_KEY, API_URL } from "../Api/config";
const MainHeader = (props) => {

    const [ShowAndHide, setShowAndHide] = useState("none");
    // -------------- For Search Items -----------------
    const [fetchSearchData, setFetchSearchData] = useState([]);
    const [MoviesSearch, setMoviesSearch] = useState("");
    const getData = (event) => {
        setMoviesSearch(event.target.value);
    }
    let MoveStr = MoviesSearch;
    for (let i = 0; i < MoveStr.length / 2; i++) {
        MoveStr = MoveStr.replace(" ", "+");
    }
    //--------------- Set useing props to config tv show or not ------------

    const TvOrMovies =()=>{
        if(props.bgImg == null){
            return "movie"
        }
        else{
            return "tv";
        }
    }

    //------------------ Fetching Movies Search List ---------------
    //--------------- Calling Api ---------------
    const ShowMoviesLink = `${API_URL}search/${TvOrMovies()}?api_key=${API_KEY}&query=${MoveStr}`

    const onSubmit = () => {


        //--------------- Hide and show related search iteam ---------------
        setShowAndHide("block");
        // setSearchData(MoviesSearch)

        
        fetch(ShowMoviesLink)
            .then(response => response.json()) //It's return a promice
            .then(MoviesApi => {
                let Searchresults = MoviesApi.results;
                setFetchSearchData(Searchresults);
            })
    }

    const [MoviesImg, setMovies] = useState([]);
    useEffect(() => {
        let x = (Math.floor((Math.random() * 19) + 1))

        fetch(Upcoming_Movies)
            .then(response => response.json()) //It's return a promice
            .then(MoviesApi => {
                let results = MoviesApi.results[x].backdrop_path;
                setMovies(results);
            })
    }, [])
    const SetBgImg =()=>{
        if(props.bgImg == null){
            return MoviesImg;
        }
        else{
            return props.bgImg;
        }
    }

    return (
        <>
            <MHeader>
                <Bg imgUrl={SetBgImg} className="mainHeader">
                    <div>
                        <h1 className="heading1 fw-bold">Welcome.</h1>
                    </div>
                    <div>
                        <h2 className="heading2">
                            Millions of movies, TV shows and people to discover. Explore now.
                        </h2>
                    </div>
                    <div className="searchbar">
                        <div className="d-flex justify-content-center " >
                            <input
                                type="search"
                                placeholder="Search Movies, TvShow , Persons......"
                                className="mr-10"

                                onChange={getData}
                                value={MoviesSearch}
                            />
                            <Button className=" btn btn-outline-info border-0"
                                onClick={onSubmit}
                            >Search</Button>
                        </div>

                    </div>
                </Bg>
            </MHeader>
            <SearchShow className="fw-bold text-center h1" display={ShowAndHide} >Search Results...</SearchShow>
            <div className="d-flex justify-content-center flex-wrap">
                {
                    fetchSearchData.map(Movie => <Cards
                        key={Movie.id}
                        Movie={Movie}
                    />)
                }
            </div>
        </>
    )
}
export default MainHeader;