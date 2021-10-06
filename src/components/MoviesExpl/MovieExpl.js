import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
//------IMPORTING URL------
import { API_URL, API_KEY, IMAGE_BASE_URL, CARD_SIZE } from '../../Api/config';

//----- Dot Icon --------
import { GoPrimitiveDot } from 'react-icons/go';


//------- StyledComponents ---------------
import { MoviesInfo } from '../../styleComponents/MoviesExpl/MoviesExpl.style';

//----Static Image----
// import MoviesImg from '../../Img&Ico/MoviesCard.jpg';
// import Prime from '../../Img&Ico/PrimeVideo.jpg';
//-----------css------------
import '../../styleComponents/MoviesExpl/MoviesExple.style.css';
//------------------- Related Movies Importing Cards Components --------------
import Cards from '../Landing/Cards';

const MovieExpl = (props) => {


    // location.reload();
    //------State of display Geners --------
    const [Gen, setGen] = useState([]);
    //------- State for display CompanyLogo ---------
    const [clogo, setClogo] = useState([]);
    //-------------- State for Display spoken_languages -------
    const [Lang, setLang] = useState([]);
    //---------------- State for Display Production Country ------
    const [Count, setCount] = useState([]);
    //------------------- State for reloading items---------------
    const [MovieData, setMovieData] = useState({});
    const params = useParams();
    let setName = params._id.substr(params._id.length-9)
    //---------------- Decided movies or tv Show -----------
    const MoveTvShow =()=>{
        if(setName === "undefined"){
            return "tv"
        }else{
            return "movie"
        }
    }
    const MoviesDetials = `${API_URL}${MoveTvShow()}/${params._id}?api_key=${API_KEY}&language=en-US`;

    //-------------- Scroll Got to top ---------------
      useEffect(() => {
        window.scrollTo(0, 0)
      }, [MoviesDetials])
    useEffect(() => {
        // refreshPage();
        fetch(MoviesDetials)
            .then(response => response.json()) //It's return a promice
            .then(MovieInfo => {
                const results = MovieInfo;
                setMovieData(results);
                // console.log(results)
                // ------ Geners
                let Genres = results.genres;

                setGen(Genres);
                // ----- Company Logo
                let CompanyLogo = results.production_companies;
                setClogo(CompanyLogo);
                //------- Language
                let MoviesLanguage = results.spoken_languages;
                setLang(MoviesLanguage);

                //------Country
                let MoviesCountry = results.production_countries;
                setCount(MoviesCountry);
            })


    }, [MoviesDetials])
    let minut = Number(MovieData.runtime);
    const minutTOHour = () => {
        for (let i = 0; i < 60; i++) {
            let hour = Math.floor(minut / 60);
            let RemMinut = minut % 60;

            return `${hour}h ${RemMinut}m`;
        }
    }
    //-------------- Display Geners ------------------
    let mainGen = " ";
    setTimeout(() => {
        for (let i = 0; i < Gen.length; i++) {
            let Gener = Gen[i].name;
            mainGen = `${Gener} ${mainGen}`
        }
    }, 3000)

    //---------------- Display CompnyLog --------------
    let ComName = " ";
    for (let i = 0; i < clogo.length; i++) {
        let Cname = clogo[i].name;
        ComName = `${ComName}  ${Cname}`
    }
    //---------------- Display Language ----------------
    let Language = " ";
    for (let i = 0; i < Lang.length; i++) {
        let MLang = Lang[i].english_name;
        Language = `${Language} ${MLang}`;
    }
    //-------------- Display Country ------------
    let Country = " ";
    for (let i = 0; i < Count.length; i++) {
        let MCount = Count[i].name;
        Country = `${Country} ${MCount}`;
    }
    // ---------------- Featch Data for related Movies -----------
    const [MovieRelated, setMovieRelated] = useState([]);
    // const [MoviesRelatedDY, setMoviesReatedDy ] = useState([]);
    const Related_Movies = `${API_URL}${MoveTvShow()}/${params._id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
    // setMoviesReatedDy(Related_Movies);
    useEffect(() => {

        fetch(Related_Movies)
            .then(response => response.json()) //It's return a promice
            .then(MovieInfo => {
                const results = MovieInfo.results;
                setMovieRelated(results);
                // console.log(results)
            })
    }, [Related_Movies])


    return (
        <>
            <MoviesInfo className="containers" bgimg={MovieData.backdrop_path}>
                <div className="item-container">
                    <div>

                        <div className="image">
                            <div className="MovMainImg"><img className="img" src={`${IMAGE_BASE_URL}${CARD_SIZE}${MovieData.poster_path}`} alt="" /></div>
                            <div className="rating"> <span>%</span><span>{MovieData.vote_average}</span></div>
                        </div>


                    </div>
                    <div>
                        <section className="title">
                            <h1 className="heading fw-bold text-center">{MovieData.title}</h1>
                            {/* <img src={`${IMAGE_BASE_URL}/w154${cLogo}`} alt="" /> */}
                            <p>Release Date <span className="fw-bold">{MovieData.release_date}</span> <br /> {mainGen} <span><GoPrimitiveDot />{minutTOHour()}</span> </p>
                            <p style={{ fontStyle: "italic" }}>{MovieData.tagline}</p>
                        </section>
                        <section className="overview">
                            <p style={{ fontWeight: "bold" }}>Overview</p>
                            <p className="paragraph">{MovieData.overview}</p>
                            <div>
                                <p className="fw-bold me-2">Spoken Languages</p>
                                <p>{Language}</p>
                            </div>
                        </section>
                        <section className="team">
                            <div>
                                <p className=" fw-bold">Production Companies</p>
                                <p>{ComName}</p>
                                <p className=" fw-bold">Production Countries</p>
                                <p>{Country}</p>
                            </div>

                        </section>
                    </div>

                </div>
            </MoviesInfo>
            <div >
                <h1 className=" fw-bold text-center " >Related Movies</h1>
                <div className="d-flex justify-content-center flex-wrap ">
                    {

                        MovieRelated.map(Movie => <Cards

                            key={Movie.id}
                            Movie={Movie}
                        />)

                    }
                </div>
            </div>
        </>
    )
}

export default MovieExpl;
