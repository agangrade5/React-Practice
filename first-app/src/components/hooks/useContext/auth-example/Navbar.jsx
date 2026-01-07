import React from 'react'
import { useAuthContext } from './AuthContext'

const Navbar = () => {
    const { isLoggedIn, login, logout } = useAuthContext()
    return (
        <nav>
            {
                isLoggedIn ? (
                    <button onClick={logout}>Logout</button>
                ) : (
                    <button onClick={login}>Login</button>
                )
            }
        </nav>
    )
}

export default Navbar