import React from 'react';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from 'store/useContext';
import{AiOutlineMenuUnfold} from 'react-icons/ai'
import{MdOutlineShoppingCart} from 'react-icons/md'
import Input from './input';
function Navbar(props) {
    const {showanimation,
        setshowanimation,
        totalQuantity,
        setsortbyprice,
        setsortbyname}=useContext(CartContext)
   
    return (
        <div className={showanimation?'navbar navbaranimation':"navbar"}>
            <div className='shoppcart'>
                <Link className='spantotalqty' href="/cart"><MdOutlineShoppingCart className='span'/><span >{totalQuantity}</span></Link></div>
            <div className='title'>
                <Input/>
            </div>
            <div className="shopppingcart">
                <button className='sortingbutton' onClick={()=>setshowanimation((prevval)=>!prevval)}><AiOutlineMenuUnfold/> Sort by </button>
                <button className={showanimation?'sortoneanimation':"sortone"} onClick={()=>{setsortbyname(true); setsortbyprice(false)}}>Name</button>
                <button className={showanimation?'sorttwoanimation':"sorttwo"} onClick={()=>{setsortbyprice(true); setsortbyname(false)}}>Price</button>
               
            </div>
            
        </div>
    );
}

export default Navbar