import './cart.css'

const Cart = ({ cart, removeFromCart }) => {

    return (
        <div className='products'>
            {cart.length === 0 && (
                <div>No Items In Cart</div>
            )}
            {cart.map(item => {
                return <div className='product' key={item.id}>
                    <div className="img_container">
                        <img src={item.image} alt='image1' />
                    </div>
                    <div className='product-info'>
                        <h2>{item.name}</h2>
                        <p>{item.desc}</p>
                        <h2>Price : {item.price}</h2>
                        <p style={{ marginBottom: '10px' }}>
                            Quantity : {item.quan}
                        </p>
                        <button onClick={() => removeFromCart(item.id)}>Remove From Cart</button>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Cart
