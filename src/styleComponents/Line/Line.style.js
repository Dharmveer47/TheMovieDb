import styled from "styled-components";

export const MainLine = styled.div`
    display:flex;
    height: 40px;
    background-color:rgba(12, 40, 49, 0.241);
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(12, 40, 49, 0.941);
    border-radius: 20px;
    width: 80%;
    

    h3{
        font-weight:bold;
    }
    @media screen and (max-width: 576px){
        width: 90%;
        height: 25px;
    }

`;

export const Links = styled.div`
    cursor: pointer;
    border-radius: 20px;
    display:flex;
    align-items: center;
    justify-content:flex-end;
    flex-basis: 250px;
    height: 40px;
    div{
        flex-basis: 125px;
        border-radius: 20px;
        height: 40px;
        display:flex;
        align-items: center;
        justify-content: space-evenly;
        :hover, div:focus{
            background-color: ${props => props.color ? props.color : "skyblue"};
        }
        @media screen and (max-width: 576px){
            height: 25px;
        }
    
    }
    @media screen and (max-width: 576px){
        height: 25px;
    }

`;