import React from 'react';
import data from '../quotes.json';

const styles = {
    'border': '2px solid yellow',
    'margin': '5%',
    'padding': '2%',
}
const Quotes = () => {
    let index = Math.round(Math.random() * 136);
    let item = data.items[index].quote;
    return (
        <h3 style={styles}>{item}</h3>
    )
}

export default Quotes;