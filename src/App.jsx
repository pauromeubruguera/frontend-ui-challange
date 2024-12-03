import React from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Favorites } from './pages/Favorites'
import { Details } from './pages/Details'
import { Home } from './pages/Home'

export const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                </ul>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/item/:id" element={<Details />} />
                </Routes>
            </main>
        </Router>
    )
}
