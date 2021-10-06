import React from 'react';
import Video from '../Img&Ico/herovideo-0.4-smaller_1_shorter.mp4';
import Poster from '../Img&Ico/gb2Header.jpg';


const Apitest = () => {
    const GetIdMovies = `https://api.themoviedb.org/3/movie/637649?api_key=446cac9a81452603fb3694e031c2c458&language=en-US`
    fetch(GetIdMovies)
            .then(response1 => response1.json()) //It's return a promice
            .then(MoviesApiLatest => {
                const result2 = MoviesApiLatest;
                console.log(result2);
            })


    return(
       <>
        <h1>Hey This is Testing</h1>
        <video src={Video}  controls width="500px"  poster={Poster}>This is video</video>
       </>
    )
}

export default Apitest;
