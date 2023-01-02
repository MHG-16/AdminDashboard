import { AiOutlineHome,
    AiOutlineShoppingCart, 
    AiOutlineCalendar,
    AiOutlineLineChart,
    AiOutlineAreaChart,
    AiOutlineBarChart,
    AiOutlineLogin
} from 'react-icons/ai';
import { HiPresentationChartLine, HiChartBar } from 'react-icons/hi';
import { RiPagesLine } from 'react-icons/ri';
import { ImUsers } from 'react-icons/im';
import { TbUsers, TbChartRadar } from 'react-icons/tb';
import { IoMdApps, IoIosColorPalette } from 'react-icons/io';
import { BsKanban, BsViewStacked } from 'react-icons/bs';
import { BiCalendarEdit, BiPyramid } from 'react-icons/bi';

export const items = [
    {
        icon: AiOutlineHome,
        title: 'Dashboard',
        links: [
            {icon: HiPresentationChartLine,
            title: 'E-commerce'
        }
        ]
    },
    {
        icon: RiPagesLine,
        title: 'Pages',
        links: [
        {
            icon: AiOutlineShoppingCart,
            title: 'orders',
        },
        {
            icon: ImUsers,
            title: 'Employees',
            
        },
        {
            icon: TbUsers,
            title: 'Customers',
        },
        ],
    },
    {
        icon: IoMdApps,
        title: 'Applications',
        links: [
            {
                icon: AiOutlineCalendar,
                title: 'Calendar',
            },
            {
                icon: BsKanban,
                title: 'Kanban',
            },
            {
                icon: BiCalendarEdit,
                title: 'Editor',
            },
            {
                icon: IoIosColorPalette,
                title: 'ColorPickler',
            }
        ]
    },
    {
        icon: TbChartRadar,
        title: 'Chart',
        links: [
            {
                icon: AiOutlineLineChart,
                title: 'Line Chart',
            },
            {
                icon: AiOutlineAreaChart,
                title: 'Area Chart',
            },
            {
                icon: AiOutlineBarChart,
                title: 'Bar Chart',
            },
            {
                icon: HiChartBar,
                title: 'Color Mapping Chart'
            }, 
            {
                icon: BiPyramid,
                title: ' Pyramids '
            },
            {
                icon: BsViewStacked,
                title: 'Stacked View'
            }
        ]
    },
    {
        icon: AiOutlineLogin,
        title: 'Log out'
    }
]