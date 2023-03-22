import React from 'react';
import { useContext } from 'react';
import { CartContext } from 'store/useContext';

function Rateitem(props) {
    const {changednote,setischangednote}=useContext(CartContext)
    const ischangeinput=(e)=>{
        setischangednote(e.target.value)
    }
    return (
        <div className="ratediv">
          <div style={{display:"flex", justifyContent:"flex-end", width:"100%"}}> <button onClick={props.close}>Close</button></div> 
         <h1>Ocenite proizvod {props.product}</h1>  
         <p>Prosecna ocena proizvoda je:{props.procentnote}</p>
         <p>Izaberite ocenu od 1 do 5</p> 
         <input placeholder='1'
         onChange={ischangeinput}
         min="1"
         max="5"
          className='rateinput'
         type="number"/>
         <button onClick={props.onClick} className='ratebutton'>OK</button>
        </div>
    );
}

export default Rateitem;