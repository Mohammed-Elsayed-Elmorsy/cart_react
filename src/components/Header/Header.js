import './header.css'
import { NavLink } from 'react-router-dom'
import { FaHome, FaShoppingCart } from 'react-icons/fa'
const Header = ({ cartLength }) => {
    return (
        <header>
            <NavLink to='/' className='logo'>
                <h2>
                    <FaHome />
                    Shopping
                </h2>
            </NavLink>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/add'>Add Product</NavLink>
                <NavLink className='cart_link' to='/cart'>
                    <FaShoppingCart className='icon' style={{ fontSize: '27px' }} />
                    <span
                        className=
                        {cartLength > 0 ? 'cart_count show' : 'cart_count hide'}>{cartLength}</span></NavLink>
                <NavLink to='/sign'>Sign in</NavLink>
            </nav>
        </header>
    )
}

export default Header
