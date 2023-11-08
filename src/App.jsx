import React from 'react'
import { createRoot } from 'react-dom/client'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import "/src/index.css"


createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>

            </Route>
        </Routes>
    </BrowserRouter>
)