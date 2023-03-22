import React from 'react';
import {AiOutlineCopyright} from 'react-icons/ai'
function Footer(props) {
    return (
        <div className='footer'>
            <div className='footerline'/>
            <p className='footer-p'> <AiOutlineCopyright style={{marginRight:"5px"}}/>2023</p>
        </div>
    );
}

export default Footer;