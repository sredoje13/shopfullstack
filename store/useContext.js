import React from "react";
import {useState,createContext} from "react"
const CartContext=createContext()
const Provider=({children})=>{
const[cartItems,setcartItems]=useState([]);
const [totalQuantity,setQuantity]=useState(0);
const [totalprice,settotalprice]=useState(0)
const [showanimation,setshowanimation]=useState(false)
const[sortbyname,setsortbyname]=useState(true);
const[sortbyprice,setsortbyprice]=useState(false)
const[inputvalue,setinputvalue]=useState("");
const[startsearch,setstartsearch]=useState(false)
const[rateditem,setrateditem]=useState({})
const[changednote,setischangednote]=useState(0)
const [result,setresult]=useState([])
const[images,setimages]=useState([])
const addoneitem=(item)=>{

setQuantity((prevval)=>prevval+1);
settotalprice((prevval)=>prevval+item.price)
const finditem=cartItems.find((itemone)=>itemone.id===item.id)

if(finditem){
const newitems=cartItems.filter((itemi)=>itemi.id!==item.id)
const newitem={ ...item, quantity:finditem.quantity+1};
setcartItems([newitem,...newitems])


}
else{

const newitem=[{
    quantity:1,
    name:item.name,
    price:item.price,
    id:item.id
}]

const allitems=[...cartItems,...newitem]
setcartItems(allitems)
}



}

const removeone=(item)=>{
    settotalprice((prevval)=>prevval-item.price*item.quantity)
    setQuantity((prevval)=>prevval-item.quantity)
 const removeitemindex=cartItems.findIndex((itemm)=>itemm.id===item.id)
 const finditem=cartItems[removeitemindex];
const newitems=cartItems.filter((itemm)=>itemm.id!==item.id)
setcartItems(newitems)


    
}
    const mn={totalprice,
    totalQuantity,
cartItems,
removeone,
addoneitem,
showanimation,
setshowanimation,
sortbyprice,setsortbyprice,
sortbyname,setsortbyname,
inputvalue,setinputvalue,
startsearch,setstartsearch,
rateditem,setrateditem,
changednote,setischangednote,
result,setresult,
images,setimages
}

return (<CartContext.Provider value={mn}>
{children}
</CartContext.Provider>)}
export {Provider,CartContext}