import { CartContext } from "store/useContext"
import {useContext,useState,useEffect} from 'react'
import Nohavecartitems from "components/Nohavecartitems";
import {GiSandsOfTime} from 'react-icons/gi'
import {GrTag} from'react-icons/gr'
import Maybe from "components/maybe";
import{HiTrash} from 'react-icons/hi'
import Link from "next/link";
const Cart=()=>{

    let havecartitems;
    const[loading,setisloading]=useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
         setisloading(false)
        }, 2000);
        return () => clearTimeout(timer);
      }, []);
const {cartItems,totalQuantity,totalprice,removeone}=useContext(CartContext)
const deleteoneitem=(item)=>{
    removeone(item)
}
if(cartItems.length>0)
{
    havecartitems=true  
}
else{havecartitems=false}

const itemms=cartItems.map((item)=>
// eslint-disable-next-line react/jsx-key
<div key={item.id} className="cart-oneitem">
   <div className="cart-name">
    <span className="span"><GrTag/></span> {item.name.toUpperCase()}</div>
   <div className="cart-qty">{item.quantity}
   </div>
   <div className="cart-price">{item.price}$ <HiTrash onClick={()=>deleteoneitem(item)} className="trash"/></div>
</div>
)
return(
    <div className="cart">
    {havecartitems&&!loading&&<div className="cart-allitems " >
        <div className="cart-oneitem tit">
        <div className="cart-name tit1">NAME</div>
   <div className="cart-qty tit1">QUANTITY
   </div>
   <div className="cart-price tit1">PRICE</div>
        </div>
        {itemms}</div>}
        {havecartitems&&loading&&<GiSandsOfTime className="sandclock"/>}
    {!havecartitems&&<Nohavecartitems/>}
    {havecartitems&&!loading&&
    <Link className="linkbuttoni" href="/inputemail">Bye</Link>
    }
    {havecartitems&&!loading&&<Maybe/>}
    </div>
)
}
export default Cart