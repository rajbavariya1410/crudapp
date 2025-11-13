import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import AdminLayout from './components/AdminLayout'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/crudapp" element={<AdminLayout />} />
        <Route path="/crudapp/about" element={<AdminLayout />} />
        <Route path="/crudapp/users" element={<AdminLayout />} />
        <Route path="/crudapp/AdminLayout" element={<AdminLayout />} />
      </Routes>
    </Router>
  )
}

export default App
