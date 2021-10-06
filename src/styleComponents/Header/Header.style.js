import styled from "styled-components";
const img= "https://www.themoviedb.org/t/p/w1280_and_h720_multi_faces"
export const Bg = styled.div`
    background: url(${img}${(props)=>props.imgUrl}); 
    background-repeat:no-repeat;
    background-size: cover;
    background-position: center;
    background-origin: border-box;
    height: 300px;
    background-blend-mode: darken;
    background-color: rgba(0, 0, 0, 0.473);
    @media screen and (max-width: 576px){
        height:200px;
    }
    
`;
export const MHeader = styled.div`
    width:100%;
   
  

`;
export const SearchShow = styled.div`
    display:${props => props.display ? props.display : "none"};
`



