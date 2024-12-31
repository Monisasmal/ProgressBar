import React, { useEffect, useState } from 'react';
import './progressbar.css';

const ProgressBar = () => {

    const[progress, setProgress] = useState(0);

    useEffect(()=>{
        if(progress < 100){
            const timer = setInterval(()=>{
                setProgress((prev) => Math.min(prev+2, 100))
            },500);
            return () => clearInterval(timer);
        }
    },[progress]);

  return (
    <div className="progress-container">
        <h2>Progressbar</h2>
        <div className="progressbar">
            <div className="progressbarFill" style={{width:`${progress}%`}}>   
            </div>
        </div>
   <p className="percentage">{progress}%</p>
   <p className='progressShow'>{progress < 100 ? 'progress...' : 'completed'}</p>
    </div>
  )
}

export default ProgressBar