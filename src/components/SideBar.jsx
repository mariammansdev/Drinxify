import Wrapper from '../assets/wrappers/SideBar'
import logo from '/undraw_barista_wwfa700.svg'
import { SlArrowRight } from "react-icons/sl";
import  { useState } from 'react';
import SubMenu from './subMenu';
import { FaWineGlassAlt } from 'react-icons/fa';
import { MdCategory } from 'react-icons/md';
import { GiGlassCelebration } from 'react-icons/gi';
import { GiOlive } from 'react-icons/gi';

const SideBar = ({ handleOpenMenu, isOpen }) => {
   const menuItems = [
        {
            label: 'Beverage Category',
            children: [
                { name: 'Alcoholic', param: 'a=Alcoholic' },
                { name: 'Non-Alcoholic', param: 'a=Non_Alcoholic' },
                { name: 'Optional Alcohol', param: 'a=Optional_Alcohol' }
            ],
            icon: <FaWineGlassAlt />
        },
        {
            label: 'Category',
            children: [
                { name: 'Alcoholic', param: 'c=Alcoholic' },
                { name: 'Ordinary Drink', param: 'c=Ordinary_Drink' },
                { name: 'Milk', param: 'c=Milk' },
                { name: 'Float', param: 'c=Float' },
                { name: 'Shake', param: 'c=Shake' }
            ],
            icon: <MdCategory />
        },
        {
            label: 'Glass',
            children: [
                { name: 'Highball Glass', param: 'g=Highball_Glass' },
                { name: 'Cocktail Glass', param: 'g=Cocktail_Glass' },
                { name: 'Champagne Flute', param: 'g=Champagne_Flute' }
            ],
            icon: <GiGlassCelebration />
        },
        {
            label: 'Ingridients',
            children: [
                { name: 'Rum', param: 'i=Rum' },
                { name: 'Gin', param: 'i=Gin' },
                { name: 'Tequila', param: 'i=Tequila' },
                { name: 'Whiskey', param: 'i=Whiskey' },
                { name: 'Brandy', param: 'i=Brandy' },
                { name: 'Liqueur', param: 'i=Liqueur' }
            ],
            icon: <GiOlive />
        }
    ];

    const [displayedOptions, setDisplayedOptions] = useState(null);
    const handleMenuClick = (idx) => {
        const toClose = displayedOptions === idx;
        setDisplayedOptions(toClose ? null : idx);
    };


    return (
        <Wrapper isOpen={isOpen}>
            <header>
                {isOpen && <div className="image-text">
                    <span className="image">
                        <img src={logo} alt="logo" style={{ maxWidth: '60px', padding: '1.5rem 0.5rem' }} />
                    </span>
                    {/* <div className="text header-text">
                        <span className='name'>Drinxify</span>
                        <span className='desc'>Drinks</span>
                    </div> */}
                </div>}
                <SlArrowRight className="toggle-icon" onClick={() => handleOpenMenu()} />
            </header>

            <div className="menu-bar">
                {isOpen && <div className="menu">
                    <div className="menu-links">
                        {menuItems.map((item, idx) => (
                            <SubMenu
                                key={item.label}
                                item={item}
                                handleMenuClick={handleMenuClick}
                                idx={idx}
                                displayedOptions={displayedOptions}
                            />
                        ))}
                    </div>
                </div>}
            </div>
        </Wrapper>
    );
}

export default SideBar