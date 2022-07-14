import React from 'react';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <div className="br2 shadow-2"style={{ height: 120, width: 120 }}>
                <div className="pa3"><img style ={{paddingTop: '5px'}} alt ='logo' src={brain}/></div>
            </div>
        </div>
    )
}

export default Logo;