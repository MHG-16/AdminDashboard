import React, { useState } from 'react';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import {AiOutlineClose}  from 'react-icons/ai';
import Chart from 'react-apexcharts'

import './Card.css';
import 'react-circular-progressbar/dist/styles.css';

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
        { expanded? (<ExpandedCard param={props} setExpanded={() => setExpanded(false)}/>)
        : <CompactCard param={props} setExpanded={() => setExpanded(true)}/>}
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
            onClick={setExpanded}
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
function ExpandedCard({param, setExpanded}){
    const data = {
        options: {
            chart: { 
            type: "area",
            height: "auto"
            },

            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35
            },

            fill: {
                colors: ["#FFF"],
                type: "gradient",
            },

            dataLabels: {
                enabled: false,
            },
            
            stroke: {
                curve: "smooth",
                colors: ["white"]
            },

            tooltip: {
                x: {
                    format: "dd/MM/yyyy HH:mm",
                },
            },
            
            grid: {
                show: true,
            },

            xaxis: {
                type: "datetime",
                categories: [
                    "2023-01-06T00:00:00Z",
                    "2023-01-06T01:30:00Z",
                    "2023-01-06T02:30:00Z",
                    "2023-01-06T03:30:00Z",
                    "2023-01-06T04:30:00Z",
                    "2023-01-06T05:30:00Z",
                    "2023-01-06T06:30:00Z"
                ]
            }
        }
    }
    return (
        <motion.div className="ExpandedCard"
            style={{
                background: param.color.backgroundColor,
                boxShadow: param.color.boxShadow,
            }}
            layoutId='expandedCard'
        >
            <div onClick={setExpanded}
                style={{alignSelf: 'flex-end', cursor: 'pointer', color: 'white'}}
            >
                <AiOutlineClose />
            </div>
            <span>{param.title}</span>
            <div className='chartContent'>
                <Chart series={param.series} type='area' options={data.options} />
            </div>
            <span>Last 24h</span>
        </motion.div>
    )
}

export default Card;