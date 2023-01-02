import { BiEuro } from 'react-icons/bi';
import { GiMoneyStack, GiPayMoney } from 'react-icons/gi';
import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

export const  CardsData =[
    {
        title: 'Sales',
        color: {
            backgroundColor: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue: 70,
        value : '25,97',
        png: BiEuro, 
        series: [
            {
                name: 'Sales',
                data: [31, 41, 28, 51, 42, 109, 100]
            }
        ]
    },
    {
        title: 'Revenue',
        color: {
            backgroundColor: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue: 80,
        value : '14,270',
        png: GiMoneyStack, 
        series: [
            {
                name: 'Revenue',
                data: [10, 100, 50, 70, 80, 30, 40]
            }
        ]
    },
    {
        title: 'Expenses',
        color: {
            backgroundColor: "linear-gradient(180deg, rgb(248, 212, 154) -146.42%, rgb(255, 202, 103) -46.42%",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: '4,270',
        png: GiPayMoney,
        series: [10, 25, 15, 30, 12, 15, 20]
    }
]