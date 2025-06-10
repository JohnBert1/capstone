import { useState } from 'react'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import Members from './pages/Members';
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/members" element={<Members />} />
      </Routes>
    </>
  )
}

export default App