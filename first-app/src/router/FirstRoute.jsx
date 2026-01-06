import React from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import Home from '../components/routers/Home'
import About from '../components/routers/About'
import Contact from '../components/routers/Contact'
import Products from '../components/routers/Products'
import NotFound from '../components/routers/NotFound'
import Phone from '../components/routers/Phone'
import Laptop from '../components/routers/Laptop'

const FirstRoute = () => {

    const User = () => {
        const { id } = useParams();
        return `User Profile for ID: ${id}`;
    }

    return (
        <BrowserRouter>

            <h1>React Router Example:</h1>
            
            <nav>
                <Link to='/'>Home</Link> | 
                <Link to='/about'> About</Link> | 
                <Link to='/contact'> Contact</Link> | 
                <Link to='/user/10'> User</Link> | 
                <Link to='/products'> Products</Link>
            </nav> 

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/user/:id' element={<User />} />
                <Route path='/products' element={<Products />}>
                    <Route path='phone' element={<Phone />} />
                    <Route path='laptop' element={<Laptop />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default FirstRoute
