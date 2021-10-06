import React, { useState, useEffect } from 'react'
//---bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import '../../styleComponents/Next&pre/Next.css'

//-------------------React Icon-----------
import { FcNext, FcPrevious } from 'react-icons/fc';
//card
//Header';
import Cards from "./Cards";
//Line
import Line from "./Line";
//---------------MainHeader----------------
import MainHeader from '../MainHeader';
//Next and previou
// import NextAndPrivious from './NextAndPrivious';
//Fetching data
import {
    POPULAR_BASE_URL,
    Upcoming_Movies,

} from "../../Api/config";

const Landing = () => {



    //=================This is popular Movies===================

    const [MoviesPoplur, setMovies] = useState([]);
    const [MoviesPoplurTotalPages, setMoviesPoplurPages] = useState([]);
    //----conterpart------
    const [countp, setCountp] = useState(1);
    const nextPagep = `${POPULAR_BASE_URL}${countp}`;

    useEffect(() => {
        fetch(nextPagep, {method: "GET"})
            .then(response => response.json()) //It's return a promice
            .then(MoviesApi => {
                const total_pages = MoviesApi.total_pages;
                let results = MoviesApi.results;
                setMovies(results);
                setMoviesPoplurPages(total_pages);
                // console.log(MoviesPoplur)
            })
    }, [nextPagep])
    //------------------------Counter for popular Movies --------------------
    const incresep = () => {
        setCountp(1 + countp);
    }
    const decresep = () => {

        if (countp < 2) {
            setCountp(countp);
        }
        else {
            setCountp(countp - 1);
        }
    }


    //Empty array is called dependincy array
    //if [] emplty then it's run only one time

    //============================Upcoming Movies=======================
    const [MoviesComing, setMoviesLatest] = useState([]);
    const [Total_Page, setTotal_pages] = useState([]);
    //----conterpart------
    const [count, setCount] = useState(1);
    const nextPage = `${Upcoming_Movies}${count}`;
    useEffect(() => {
        fetch(nextPage)
            .then(response1 => response1.json()) //It's return a promice
            .then(MoviesApiLatest => {
                const result2 = MoviesApiLatest.total_pages;
                const results = MoviesApiLatest.results;
                setMoviesLatest(results);
                setTotal_pages(result2);

            })
    }, [nextPage])


    const increse = () => {
        setCount(1 + count);
    }
    const decrese = () => {

        if (count < 2) {
            setCount(count);
        }
        else {
            setCount(count - 1);
        }
    }
    useEffect(() => {
        window.scrollTo(600,1900)
      }, [nextPage])
      useEffect(() => {
        window.scrollTo(500,0)
      }, [nextPagep])


    return (
        <>

            <MainHeader/>
            {/* <NextAndPrivious total_pages={Total_Page} /> */}
            <Line MovieType="Popular" />
            <div className="d-flex justify-content-center flex-wrap">
                {
                    MoviesPoplur.map(Movie => <Cards
                        key={Movie.id}
                        Movie={Movie}
                    />)
                }
            </div>

            {/* <NextAndPrivious total_pages={MoviesPoplurTotalPages}/> */}

            {/* ------------------Next And Previous Page for Popular Movies----------------- */}


            <div className="Smain">

                <div className="Main d-flex">
                    <div className="Ntotal">Pages = <span>{MoviesPoplurTotalPages}</span> </div>
                    <div className="NPbtn d-flex justify-content-center align-items-center">
                        <Button className="Npre btn btn-secondary" type="button" onClick={decresep}><FcPrevious />Previous</Button>
                        <div className="Ncount ms-1 me-1">{countp}</div>
                        <Button className="Nnext btn btn-secondary" onClick={incresep}>Next <FcNext /></Button>
                    </div>

                </div>
            </div>

            <Line MovieType="UpComing" />
            <div className="d-flex justify-content-center flex-wrap">
                {
                    MoviesComing.map(Movie => <Cards
                        key={Movie.id}
                        Movie={Movie}
                    />)
                }
            </div>

            {/* ------------------Next And Previous Page for Upcoming Movies----------------- */}
            <div className="Smain">

                <div className="Main d-flex">
                    <div className="Ntotal">Pages = <span>{Total_Page}</span> </div>
                    <div className="NPbtn d-flex justify-content-center align-items-center">
                        <Button className="Npre btn btn-secondary" type="button" onClick={decrese}><FcPrevious />Previous</Button>
                        <div className="Ncount ms-1 me-1">{count}</div>
                        <Button className="Nnext btn btn-secondary" onClick={increse}>Next <FcNext /></Button>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Landing;
