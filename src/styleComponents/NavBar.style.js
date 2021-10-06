import styled from "styled-components";

// import darkbg from '../Img&Ico/Darkbg.svg';
export const Nav = styled.div`
    z-index: 1;
    font-size: 30px;
    color:green;

    display:flex;
    justify-content:space-between;
    align-items:center;
    /* background-color: rgba(4, 247, 255, 0.882); */
    img{
        background:none;
        @media (max-width: 576px) {
        width:200px;
        }
    } 
    position: relative;
`;
export const Ham = styled.div`
    display:none;
    color:black;
    cursor: pointer;
    @media (max-width: 576px) {
        display:block;
        }
`;
export const Search = styled.div`
    color:black;
    cursor: pointer;
    
`;

export const Links = styled.div`
    transform: translateX(-10%);
    color:black;
    display:flex;
    align-items:center;
    justify-content:center;

    >div{
        
        text-align:center;
        font-size: 20px;
        margin : 5px;
        padding:5px;
        cursor: pointer;
        /* width:100px; */
        :hover{
            text-align:center;
            
            color: white;
            background-color: black;
            border-radius:5px;

        }
    }
    @media (max-width: 576px) {
        transform: translateX(0%);
        background:lightcyan;
        text-align:center;
        width:100%;
        position:absolute;
        flex-direction:column;
        top:100%;
        transition: 1s;
        animation: NavAni .5s ease-in-out;
        display:${props => props.display ? props.display : "none"};
    }
    @keyframes NavAni {
            from{
                transform: translateX(-100%);
            }
            to{
                transform: translateX(0%);
            }
        }

`;
