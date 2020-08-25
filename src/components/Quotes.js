import React from 'react';
import data from '../quotes.json';


const Quotes = () => {
    let index = Math.round(Math.random() * 136);
    let item = data.items[index].quote;
    return (
        <h3>{item}</h3>
    )
}

export default Quotes;