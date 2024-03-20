/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
    FaTh,
    FaList,
}from "react-icons/fa";
import { TbSquareLetterD } from "react-icons/tb";
import { FaRegSquarePlus } from "react-icons/fa6";
import { CgMenuBoxed } from "react-icons/cg";
import { GrInbox } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/createProduct",
            name:"Create Product",
            icon:<FaRegSquarePlus />
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaList/>
        },
        {
            path:"/tracker",
            name:"Tracker",
            icon:<CgMenuBoxed/>
        },
        {
            path:"/shipment",
            name:"Shipment History",
            icon:<GrInbox/>
        }
        
    ]
    return (
        <div className="container">
           <div style={{width: "354px"}} className="sidebar">
               <div className="top_section">
                    <h1 style={{display: "block"}} className="logo">Digichain</h1>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div  className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               <NavLink to='/logout' className="link" style={{marginTop: '250px'}} activeclassName="active">
                    <div className="icon">
                        <IoLogOutOutline />    
                    </div>
                    <div className="link_text">Log Out</div>
                </NavLink>
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;