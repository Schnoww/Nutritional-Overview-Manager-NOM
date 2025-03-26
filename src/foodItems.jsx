// import { useState } from 'react';
import './App.css';
import Sheet from "./data.jsx";

const foodItems = () => {

    for (let i = 0; i < col.length; i++) {
        // listItems.push(<li key={i}>{items[i]}</li>);
    }

    return (
        <div className='foodItems'>
            <h1>Daily Items</h1>
            <p>Breakfast</p>
                {/*{col.map((item, index) => (*/}
                {/*    <li key={index}>{item}</li>*/}
                {/*))}*/}
            <p>Lunch</p>
            <p>Dinner</p>
        </div>
    );
};
export default foodItems;