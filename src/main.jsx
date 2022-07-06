import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '@/views/Home'
import About from '@/views/About'
import Learn from '@/views/Learn'
import Set from '@/views/high/Set'
import Function from '@/views/high/Function'
import NotFound from '@/views/NotFound'
import '@/global.css'

const root = ReactDOM.createRoot(
    document.querySelector('#root')
)

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/high/set" element={<Set />} />
            <Route path="/high/function" element={<Function />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)