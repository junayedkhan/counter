import React from 'react'
import { data } from './data/data'

const Item = ({value}) => {

    return (
        <div className="row content">
            {data.map((val, index) => {
                return(
                <div className="col-lg-4 col-md-6 col-12 mb-3" key={index}>
                    <div class="card">
                        <img src={val.img} class="card-img-top" alt={val.title} />
                        <div class="card-body">
                            <h5 class="card-title">{val.title}</h5>
                            <p class="card-text">{val.description}</p>
                            <button class="btn btn-primary" onClick={value}>add Cart</button>
                        </div>
                    </div>                      
                </div>
                )
            })}
        </div>
    )
}

export default Item;
