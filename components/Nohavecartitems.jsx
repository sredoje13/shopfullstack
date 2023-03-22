import React from 'react';
import Link from 'next/link';
function Nohavecartitems(props) {
    return (
        <div className='nothaveitems'>
            <h1 className='nothaveitems-title'>
                NEMATE PROIZVODA
            </h1>
            <p >
                <Link className='nothaveitems-p' href='/'>
                Return to the home page!!!</Link>
            </p>
        </div>
    );
}

export default Nohavecartitems;