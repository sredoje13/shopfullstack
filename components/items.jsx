import Image from 'next/image';
import React from 'react';


function Items(props) {
    return (
        <div className='onefruit-div' >
        <div className='fruit-name'>{props.name}</div>
        <div className='image-div'>
            <Image width="1000" height="300"  className='image' src={props.image} alt="slikaa"/>
        
        </div>
        <div className='fruit.price'>{props.price},00$</div>
        <div className='fruit.note'>{props.note}</div>
       <div className='button-div'><button onClick={props.byeitem} className='button-note'>BYE</button>
        <button onClick={props.rateitem}className='button-note'>RATE US</button></div>
         </div>
    );
}

export default Items;