import Wrapper from '../assets/wrappers/SideBar'
import logo from '/undraw_barista_wwfa700.svg'
import { SlArrowRight } from "react-icons/sl";
import React, { useState } from 'react';

const SideBar = ({ handleOpenMenu, isOpen }) => {
    const menuItems = [
        {
            label: 'Glass',
            children: ['Martini', 'Highball', 'Wine', 'Shot']
        },
        {
            label: 'Type',
            children: ['Alcoholic', 'Non-Alcoholic', 'Cocktail', 'Mocktail']
        },
        {
            label: 'Category',
            children: ['Classic', 'Popular', 'Seasonal']
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
                            <div className="types-link" key={item.label}>
                                <div
                                    className="menu-item"
                                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                                    onClick={() => handleMenuClick(idx)}
                                >
                                    <SlArrowRight style={{ marginRight: '8px', transform: displayedOptions === idx ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
                                    <span className="text nav-text">{item.label}</span>
                                </div>
                                {displayedOptions === idx && (
                                    <div className="submenu" style={{ marginLeft: '24px' }}>
                                        {item.children.map((child) => (
                                            <div className="submenu-item" key={child} style={{ padding: '4px 0' }}>
                                                {child}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>}
            </div>
        </Wrapper>
    );
}

export default SideBar