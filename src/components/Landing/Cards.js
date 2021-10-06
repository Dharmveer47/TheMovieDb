import React from 'react';
import { Link } from 'react-router-dom';
//css
import '../../styleComponents/Cards/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import defImg from '../../Img&Ico/NotFound.png';
//-----Next Page --------

const Cards = (props) => {


    const { Movie } = props;
    const imgurl = "http://image.tmdb.org/t/p/w300";
    let img = ``;

    if (Movie.poster_path === null) {
        img = defImg;
    } else {
        img = `${imgurl}${Movie.poster_path}`;
    }
    const ChageInt =()=>{
        return Math.ceil(Movie.vote_average)
    }


    return (
        <>
            <div className="card">
                <Link to={`/MovieExpl/${Movie.id}${Movie.title}`} style={{ textDecoration: "none" }}>
                    <div className="imgCrd">
                        <img src={img} alt="moviesImg" />
                        <span>%<div>{ChageInt()}</div></span>
                    </div>
                    <div className="cName" >
                        {/* {SetTvName} */}
                    </div>
                </Link>
                <div className="cDate">
                    {/* {Movie.release_date} */}
                    {/* {Movie.id} */}
                </div>
            </div>
        </>
    )
}

export default Cards;
