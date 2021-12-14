import React from 'react'
import Item from './Item';

const Home = ({value}) => {
    
    return (
        <div className="container">
            <Item value={value} />
        </div>

    )
}

export default Home;
