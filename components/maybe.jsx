import Image from 'next/image';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from 'store/useContext';
import { urlFor } from 'lib/client';
function Maybe(props) {
  const{
    result,
    cartItems,
    images,
    addoneitem
    }=useContext(CartContext)
    const addoneitemmm=(it)=>{
      addoneitem(it)
    }
    var output = result.filter(item => !cartItems.some(other => item.id == other.id));

   
    var output2 = images.filter(item =>output.some(other => item.id == other.id));
    const finaly=output2.sort((a,b)=>a.slug.current>b.slug.current)
   
    const divrii=output.sort((a,b)=>a.id-b.id)
     const divii=output.sort((a,b)=>a.id-b.id).map((item,i)=>
     
     // eslint-disable-next-line react/jsx-key
     (<div  onClick={()=>addoneitemmm(item)} className="oneitem-maybe">
      
<Image  className="oneitem-maybe-image" src={urlFor(finaly[i].image).url()} alt="slikaaa" width={300} height={300}/>
<p >{item.name.toUpperCase()}</p>
     </div>))
     
    return (
      <div className="maybe ">
        <div className="track">
           {divii} 
        </div>
      </div>
        
    );
}

export default Maybe;