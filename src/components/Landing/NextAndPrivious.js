import React, { useState } from 'react'
//css
import '../../styleComponents/Next&pre/Next.css'
//React Icon
import { FcNext, FcPrevious } from 'react-icons/fc';
import { Button } from 'reactstrap';
//Configration file


const NextAndPrivious = (props) => {

    //============================Upcoming Movies=======================

    const [count, setCount] = useState(1)
    const increse = () => {
        setCount(1+count);
    }
    const decrese = () => {

        if (count < 2) {
            setCount(count);
        }
        else {
            setCount(count - 1);
        }
    }
    return (
        
        <>
       
        
        
        <div className="Smain">

            <div className="Main d-flex">
                <div className="Ntotal">Pages = <span>{props.total_pages}</span> </div>
                <div className="NPbtn d-flex justify-content-center align-items-center">
                    <Button className="Npre btn btn-secondary" type="button" onClick={decrese}><FcPrevious />Previous</Button>
                    <div className="Ncount">{count}</div>
                    <Button className="Nnext btn btn-secondary" onClick={increse}>Next <FcNext /></Button>
                </div>
            </div>
        </div>
     
        </>
    )
}

export default NextAndPrivious;

