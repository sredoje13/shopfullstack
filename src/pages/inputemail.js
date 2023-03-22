import React, { useState } from 'react';
import useCustommail from 'store/useCustommail';
import { useContext } from 'react';
import { CartContext} from 'store/useContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import Link from 'next/link';
function Inputemail(props) {
    const validatedvalud=(item)=>item.trim()!=="0"
  const [showcart,setshoecart]=useState(false)

const{ totalQuantity,
    totalprice,
    cartItems
}=useContext(CartContext)



    const{
        error:errorname,
onTouch:onTouchname,
onChange:onChangename,
value:valuename,
validatedvalue:validatedname,
restart:restartname
    }=useCustommail()
    const{
        error:errormail,
onTouch:onTouchmail,
onChange:onChangemail,
value:valuemail,
validatedvalue:validatedmail,
restart:restartmail
    }=useCustommail()
    const{
        error:erroradress,
onTouch:onTouchadress,
onChange:onChangeadress,
value:valueadress,
validatedvalue:validatedadress,
restart:restartadress
    }=useCustommail()
const nameclass=!errorname?"input-name":"input-error";
const aressclass=!erroradress?"input-name":"input-error";
const mailclass=!errormail?"input-name":"input-error";
let isnotvalid=false
if(!validatedadress||!validatedmail||!validatedname||!valuemail.includes("@")){
    isnotvalid=true
}
else{isnotvalid=false}


let objectofitems=[]
for(let item=0; item<cartItems.length;item++){
    objectofitems.push({name:cartItems[item].name, 
    qty:cartItems[item].quantity,
id:cartItems[item].id,})
}

const sendmail=async()=>{
    const val={
        id:Math.random()*100000,
        name:valuename,
        email:valuemail,
        adress:valueadress,
        price:totalprice,
       
    }
  if(!isnotvalid){
    await axios.post("/api/buy",val).then(()=>{
        restartadress();
        restartmail();
        restartname()
    }).then(()=>{toast.success("SUCCESSFUL PURCHASE!!!")}).then(()=>setshoecart(false))
  }  

}
const blur=showcart?{filter:"blur(8px"}:{}
    return (
        <div className='inputdiv' >

            <h1 style={blur} className='h1-input'>Fill the fields!!!</h1>
            <Toaster/>
            <div style={blur} className='form-input-email'>
                <label className='label'>Name:</label>
              <input onChange={onChangename} 
              onBlur={onTouchname}
              value={valuename}
              className={nameclass}/>
              <label className='label'>E-mail:</label>
              <input
              onChange={onChangemail} 
              onBlur={onTouchmail}
              value={valuemail}
              className={mailclass}/>
              <label className='label'>Adress:</label>
            <input 
            onChange={onChangeadress} 
            onBlur={onTouchadress}
            value={valueadress}
            className={aressclass}/>
            <label className='label'>Choose a payment method:</label>
            <select className="input-name">
            <option value="3">After picking up the package</option>
            <option value="1" disabled>Payment slip</option>
            <option value="2" disabled>Paypal</option>
            
            </select>
            <button disabled={isnotvalid} onClick={()=>{setshoecart(true)}} className={isnotvalid?"disabledbutton":'buttonemail'}>Buy</button>
           
            </div>
            <div style={blur} className='allstaff'>
            All fields must be filled!!!
            </div>
            <Link style={{marginTop:"20px"}} className='nothaveitems-p' href='/'>
            Return to the home page!!! </Link>
            {showcart&&<div className='rate' >
                <button className='closebutton' onClick={()=>setshoecart(false)}>Close</button>
            <p>You have {totalQuantity} for {totalprice}$ </p> 
            <p>Are you sure you want to buy?</p>
            <button className="linkbutton" onClick={sendmail}>OK</button>
            </div>}
        </div>
    );
}

export default Inputemail;