import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'

/* import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import Phone from './pages/Phone'
import Laptop from './pages/Laptop' */

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Products = lazy(() => import('./pages/Products'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Phone = lazy(() => import('./pages/Phone'))
const Laptop = lazy(() => import('./pages/Laptop'))

const LazyRoute = () => {

    const User = () => {
        const { id } = useParams();
        return `User Profile for ID: ${id}`;
    }

    return (
        <BrowserRouter>

            <h1>Lazy Load Router Example:</h1>
            
            <nav>
                <Link to='/'>Home</Link> | 
                <Link to='/about'> About</Link> | 
                <Link to='/contact'> Contact</Link> | 
                <Link to='/user/10'> User</Link> | 
                <Link to='/products'> Products</Link>
            </nav> 


            {/* <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/user/:id' element={<User />} />
                <Route path='/products' element={<Products />}>
                    <Route path='phone' element={<Phone />} />
                    <Route path='laptop' element={<Laptop />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes> */}

            <Suspense fallback={<p>Loading...</p>}>
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
            </Suspense>
        </BrowserRouter>
    )
}

export default LazyRoute
