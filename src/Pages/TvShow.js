import React, { useEffect, useState } from 'react';
import { POPULAR_TVSHOW } from '../Api/config';
//------------------- Import main header --------------
import Header from '../components/MainHeader'
// ---------------- Line js --------------------------
import Line from "../components/Landing/Line"
// ----------------- Cards js -----------------------
import Cards from '../components/Landing/Cards';
const TvShow = () => {
    const [TvBgSet, setTvBgSet] = useState("");
    const [GetPopulatTvShow, setGetPopularTvShow ] = useState([]);
    useEffect(() => {
        let x = (Math.floor((Math.random() * 19) + 1))
        fetch(POPULAR_TVSHOW)
            .then(response => response.json()) //It's return a promice
            .then(TvInfo => {
                let TvShow = TvInfo.results;
                let results = TvInfo.results[x].backdrop_path;
                setTvBgSet(results);
                setGetPopularTvShow(TvShow)
                console.log(TvShow)
            })
    }, [])

    return (
        <>
            <Header  bgImg={TvBgSet}  />
            <Line TvShow="TvShow"/>
            <div className="d-flex justify-content-center flex-wrap">
                {
                    GetPopulatTvShow.map(Movie => <Cards
                        key={Movie.id}
                        Movie={Movie}
                        tv="tv"
                    />)
                }
            </div>
        </>
    )
}

export default TvShow
