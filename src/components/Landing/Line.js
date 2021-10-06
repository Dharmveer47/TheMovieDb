import React from 'react'
//css
import "../../styleComponents/Line/Line.style.css";

import { MainLine, Links } from '../../styleComponents/Line/Line.style';
const Line = (props) => {
    return (
        <div className="d-flex mt-1 justify-content-center">
            <MainLine>
                <div className="fw-bold ms-2">{props.MovieType ? props.MovieType : "Poplar" }</div>
                <Links className="Links">
                    <div className="movies btn btn-primary">{props.TvShow ? props.TvShow : "Movies" }</div>
                </Links>
            </MainLine>
        </div>

    )
}

export default Line;
