import React from 'react'; 
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
       <div className = 'center ma'>
           <div className = 'absolute mt2'>
           <img id = 'inputimage' alt='' src={imageUrl} height = 'auto' width = '500px'/>
           {box.map(box => {
            return <div key= "" className = 'bounding-box' style={{top: box.topRow, bottom: box.bottomRow, left: box.leftCol, right: box.rightCol}}></div>
           })}
           </div>
       </div>
    )
}

export default FaceRecognition;