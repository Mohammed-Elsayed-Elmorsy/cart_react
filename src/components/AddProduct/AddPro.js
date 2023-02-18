import { createRef, useEffect, useRef, useState, namee, pricee } from 'react'
import './add.css'
const AddPro = ({ addItem, show }) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState()
    const nameRef = useRef()
    let nameRefVal
    useEffect(() => {
        nameRefVal = nameRef.current
        nameRefVal.focus()
    }, [])
    function setvalues() {
        setName('')
        setPrice()
    }
    return (
        <form onSubmit={(e) => addItem(e, name, price)}>
            <h2>Add Product</h2>
            <input ref={nameRef} type="text" placeholder='Enter Product Name' onChange={(e) => setName(e.target.value)} value={namee} />
            <input type="number" placeholder='Enter Product Price' onChange={(e) => setPrice(e.target.value)} value={pricee} />
            <button type='submit' value='Add Product'>Add Product</button>
            <span className={show ? 'show' : 'hide'}>Added To Products in Home</span>
        </form>
    )
}

export default AddPro
