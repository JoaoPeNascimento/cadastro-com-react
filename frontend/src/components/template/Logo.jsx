import './Logo.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src="/imgs/logo.png" alt="logo" />
        </Link>
    </aside>