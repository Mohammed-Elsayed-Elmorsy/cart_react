import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Cart from './components/Cart/Cart'
import Sign from './components/Sign/Sign'
import Data from './components/bach/data'
import AddPro from './components/AddProduct/AddPro'
import img from './images/gallery-01.png'
const App = () => {
    const [state, setState] = useState([])
    const [cartLength, setCartLength] = useState(0)
    const [cartitems, setCartItms] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        setState(Data)
    }, [])

    function addToCart(id) {
        let clicked = Data.find(item => item.id === id)
        let found = cartitems.some(item => item.id == clicked.id)
        if (found) {
            clicked.quan += 1
        } else {
            cartitems.push(clicked)
        }
        setCartLength(cartitems.length)
    }

    function removeFromCart(id) {
        let filtered = cartitems.filter(item => item.id !== id)
        let clicked = cartitems.find(item => item.id == id)
        clicked.quan = 1
        setCartItms(filtered)
        setCartLength(filtered.length)
    }
    function addItem(e, name, price) {
        e.preventDefault()
        if (name === '' || price === '') {
            alert('Enter data')
        } else {
            state.push({ name: name, id: state.length + 1, price: price, new: true, image: img })
            console.log(name, state)
            setState(state)
            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, 1500)
        }
    }
    function removeFromHome(id) {
        let filtered = state.filter(item => item.id !== id)
        setState(filtered)
    }

    return (

        <Router>
            <Header cartLength={cartLength} />
            <Routes>
                <Route path='/add' element={<AddPro
                    show={show}
                    addItem={addItem}
                />} />
                <Route path='/' element=
                    {
                        <Home
                            items={state}
                            addToCart={addToCart}
                            removeFromHome={removeFromHome}
                        />
                    }
                />
                <Route path='/cart' element=
                    {
                        <Cart removeFromCart={removeFromCart}
                            cart={cartitems}
                        />
                    }
                />
                <Route path='/sign' element={<Sign />} />
            </Routes>
        </Router>

    )
}

export default App
