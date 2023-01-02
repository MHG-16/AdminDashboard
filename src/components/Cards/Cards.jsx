import React from 'react';

import './Cards.css';
import { CardsData } from './CardsData';
import  Card  from '../Card/Card';

const Cards = () => {
  return (
    <div className='cards'>
        {CardsData.map((card, index) =>
        <div key={index} className='parentContainer'>
            <Card title={card.title}
                png={card.png}
                color={card.color}
                barValue={card.barValue}
                value={card.value}
                series={card.series}/>
        </div>
        )}
    </div>
  )
}

export default Cards