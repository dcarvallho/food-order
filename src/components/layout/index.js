import React from 'react';
import style from './style.module.css';

import mealsImage from '../../assets/meals.jpg';

const Header = () => {
    return(
        <div>
            <header className={style.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={style['mainImage']}>
                <img src={mealsImage} alt="A table full of delicious food!"/>
            </div>
        </div>
    );
};

export default Header;