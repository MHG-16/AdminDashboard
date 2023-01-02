import React, { useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';

import './Card.css';
import 'react-circular-progressbar/dist/styles.css';

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
        { expanded? (<ExpandedCard />): <CompactCard param={props} setExpanded={() => setExpanded(true)}/>}
    </AnimateSharedLayout>
  )
}

function CompactCard({param, setExpanded}){
    const PNG = param.png;
    return(
        <div className='CompactCard'
            style={{
                background: param.color.backgroundColor,
                boxShadow: param.color.boxShadow
            }}
        >
            <div className='radialBar'>
                <CircularProgressbar 
                    value={param.barValue}
                    text={`${param.barValue}%`}/>
                <span>{param.title}</span>
            </div>
            <div className='detail'>
                <PNG />
                <span>€{param.value}</span>
                <span>Last 24h</span>
            </div>
        </div>
    )
}
function ExpandedCard(){
    return null
}

export default Card;