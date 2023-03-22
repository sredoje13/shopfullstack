import React from 'react';
import { useContext} from 'react';
import { CartContext } from 'store/useContext';
import {BiSearch} from 'react-icons/bi'
function Input(props) {
    const{setinputvalue,setstartsearch}=useContext(CartContext)
   
    const changeinput=(e)=>{
     setinputvalue(e.target.value),
     setstartsearch(true)
    }
    return (
        <div className='input'>
          
            <input type="text" onChange={changeinput}
            placeholder= "Search"/>
            <span className='input-span'> <BiSearch/></span>
           
            
        </div>
    );
}

export default Input;