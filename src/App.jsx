import { useState } from 'react'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
