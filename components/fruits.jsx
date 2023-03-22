"use client"
import React from 'react';
import { useEffect,useState ,useRef} from 'react';
import axios from 'axios';
import { urlFor } from 'lib/client';
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import { CartContext } from 'store/useContext';
import { useContext } from 'react';
import Items from './items';
import Rateitem from './Rateitem';
function Fruits(props) {
  const ref=useRef()
    const{cartItems,addoneitem,showanimation,
        sortbyprice,
        result,setresult,
        inputvalue,
        startsearch,
        setrateditem,
sortbyname,rateditem,
setimages,
changednote
        }=useContext(CartContext)

 
    const {products}=props
    setimages(products)
    
    const[israted,setisrated]=useState(false)
    const[prosek,setprosek]=useState(0)
    async function getfruits(){
   let resi=await axios.get("/api/hello").then((res)=>
   res.data).then((res)=>{
   
   setresult(res.result)})
   
    }




    useEffect(()=>{
    getfruits()
    },[])
    
    const allimages=products.sort((a,b)=>a.id-b.id)
    
   const rateitem=(item)=>{
    setisrated(true)
    if(item.newqty>0){
    setprosek(item.note/item.newqty)
   
  }
    else{ 
      setprosek(0)}
    setrateditem(item)
  
   }
   if(israted){
    const executeScroll = () => window.scrollTo({ behavior: 'smooth', 
    top:ref.current.offsetTop-200 } ) 
    executeScroll()
  }

   const byeitem=(item)=>{
    
     addoneitem(item)
   }
const sum=parseInt(rateditem.note)+parseInt(changednote)

const sumy=parseInt(rateditem.newqty)
   const postrateitem=async()=>{
    
   await axios.put("/api/update", {note:sum, id:rateditem.id,newqty:sumy+1})
 .then(()=>axios.get("/api/hello")).then((res)=>
   res.data).then((res)=>{

   setresult(res.result)
  
  }).then(()=> setisrated(false))
  
   }
    // eslint-disable-next-line react/jsx-key
    const fillarray=[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>];
    // eslint-disable-next-line react/jsx-key
    const outlinearr=[<AiOutlineStar />,<AiOutlineStar/>,<AiOutlineStar/>,<AiOutlineStar/>,<AiOutlineStar/>]
   
  
  
    const alldatasbyprice=result.sort((a,b)=>a.price-b.price).map((item)=>
   <Items
   rateitem={()=>rateitem(item)}
   key={item.name.toString()}
   byeitem={()=>byeitem(item)} 
   price={item.price}
note={fillarray.slice(0,item.note).concat(outlinearr.slice(item.note))}
   name={item.name.toUpperCase()}
    id={item.id}
    image={urlFor(allimages[item.id-1].image).url()} />)
   const alldatasbyname= result.sort((e1, e2) =>
   e1.name.toLowerCase().localeCompare(e2.name.toLowerCase())
 ).map((item)=>
 <Items
 rateitem={()=>rateitem(item)}
 key={item.name.toString()}
 byeitem={()=>byeitem(item)} 
 price={item.price}
note={fillarray.slice(0,(parseInt(item.note)/parseInt(item.newqty))).concat(outlinearr.slice(parseInt(item.note)/parseInt(item.newqty)))}
 name={item.name.toUpperCase()}
  id={item.id}
  image={urlFor(allimages[item.id-1].image).url()} />
 )
 let searchhh=[]
 if(startsearch){
 
  const searchitem=result.filter((item)=>item.name.includes(inputvalue))
  searchhh=searchitem
 }
const research=searchhh.map((item)=>
<Items
 rateitem={()=>rateitem(item)}
 key={item.name.toString()}
 byeitem={()=>byeitem(item)} 
 price={item.price}
note={fillarray.slice(0,item.note).concat(outlinearr.slice(item.note))}
 name={item.name.toUpperCase()}
  id={item.id}
  image={urlFor(allimages[item.id-1].image).url()} />
) 
 
    return (
        <div className={showanimation?'allfruits animatemain':"allfruits"}>
          
          {!sortbyname&&sortbyprice&&!startsearch&&alldatasbyprice}
           {!sortbyprice&&sortbyname&&!startsearch&&alldatasbyname}
           {startsearch&&research}
         <div className='rate'style={!israted?{display:"none"}:{}} 
         ref={ref}><Rateitem
         procentnote={prosek}
         onClick={postrateitem}
          close={()=>setisrated(false)}
          product={rateditem.name}

          /></div>

        </div>
    );
}

export default Fruits;