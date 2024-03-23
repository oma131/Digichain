/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing/Landing'
import Footer from './components/Footer'
import Role from './pages/Role'
import Wallet from './pages/Wallet'
import Email from './pages/Email'

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import CreateProd from './pages/CreateProd.jsx';
import ProdList from './pages/ProdList.jsx';
import Shipment from './pages/Shipment.jsx';
import Tracker from './pages/Tracker.jsx';
import Logout from './pages/Logout.jsx';




const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/role" element={<Role />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/email" element={<Email />} />
        <Route path="/dashboard/*" element={<DashboardWithSidebar />} />
        <Route path="/createProduct" element={<SidebarRouteWrapper><CreateProd /></SidebarRouteWrapper>} />
        <Route path="/productList" element={<SidebarRouteWrapper><ProdList /></SidebarRouteWrapper>} />
        <Route path="/shipment" element={<SidebarRouteWrapper><Shipment /></SidebarRouteWrapper>} />
        <Route path="/tracker" element={<SidebarRouteWrapper><Tracker /></SidebarRouteWrapper>} />
        <Route path="/logout" element={<SidebarRouteWrapper><Logout /></SidebarRouteWrapper>} />
      </Routes>
    </Router>
  )
}

function SidebarRouteWrapper({ children }) {
  return (
    <Sidebar>
      {children}
    </Sidebar>
  );
}

function DashboardWithSidebar() {
  return (
    <Sidebar>
      <Dashboard />
    </Sidebar>
  );
}

export default App

