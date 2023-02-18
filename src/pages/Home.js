import { useState } from 'react'
import './home.css'
const Home = ({ items, addToCart, removeFromHome }) => {

    return (
        <div className='products'>
            {items.map(item => {
                return <div key={item.id} className='product'>
                    <div className='img_container'>
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className='product_info'>
                        <h2>{item.name}</h2>
                        <p>{item.desc}</p>
                        <h2>Price : {item.price}$</h2>
                        <button onClick={() => addToCart(item.id)}>Add To Cart</button>
                        {item.new && <button onClick={() => removeFromHome(item.id)}>Remove</button>}
                    </div>
                </div>
            })}
        </div>
    )
}

export default Home
