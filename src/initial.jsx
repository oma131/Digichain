import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx'
import CreateProd from './pages/CreateProd.jsx';
import ProdList from './pages/ProdList.jsx';
import Shipment from './pages/Shipment.jsx';
import Tracker from './pages/Tracker.jsx';
import Logout from './pages/Logout.jsx';


const initial = () => {
  return (
    <BrowserRouter>
        <Sidebar>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/createProduct" element={<CreateProd />} />
                <Route path="/productList" element={<ProdList />} />
                <Route path="/shipment" element={<Shipment />} />
                <Route path="/tracker" element={<Tracker />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </Sidebar>
    </BrowserRouter>
  )
}

export default initial