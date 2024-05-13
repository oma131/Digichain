/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaTh, FaList }from "react-icons/fa";
import { FaRegSquarePlus } from "react-icons/fa6";
import { CgMenuBoxed } from "react-icons/cg";
import { GrInbox } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const [activeLink, setActiveLink] = useState(null);

    const handleNavLinkClick = (index) => {
        setActiveLink(index);
    };

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
        <div className="flex flex-col md:flex-row">
           <div className="w-full md:w-64 md:h-screen md:bg-[#09061E] md:text-black fixed md:fixed overflow-y-auto md:overflow-y-visible shadow-2xl  bottom-0 md:top-0 md:left-0">
               <div className="hidden p-4 md:flex items-center justify-center md:justify-start">
                    <h1 className="text-2xl text-white font-bold">Digichain</h1>
               </div>
               <div className="md:block hidden">
                    {menuItem.map((item, index)=>(
                        <NavLink 
                            to={item.path} 
                            key={index} 
                            className={`p-4 flex items-center gap-4 text-white hover:font-bold ${
                                activeLink === index ? 'bg-[#6F4FF2]  text-white rounded-s-full ml-10 font-bold' : ''
                            }`}
                            onClick={() => handleNavLinkClick(index)}
                        >
                            {item.icon}
                            <span  className="text-sm">{item.name}</span>
                        </NavLink>
                    ))}
                    <div className="md:block hidden absolute bottom-0 left-0 w-full  mb-24">
                        <NavLink 
                            to='/logout' 
                            className={`p-4 flex items-center gap-4 text-white hover:font-bold ${
                                location.pathname === '/logout' ? 'bg-[#6F4FF2] rounded-s-full ml-10 font-bold' : ''
                              }`}
                            onClick={() => setActiveLink(null)}
                        >
                            <IoLogOutOutline />    
                            <span className="text-sm">Log Out</span>
                        </NavLink>
                    </div>
               </div>
           </div>
           <main className="flex-1 z-10 ml-0 md:ml-64 overflow-y-auto">{children}</main>
           <div className="md:hidden flex justify-around w-full  bg-[#09061E] text-black z-20 fixed bottom-0">
                {menuItem.map((item, index) => (
                    <NavLink
                    key={index}
                    to={item.path}
                    className={`p-4 flex items-center gap-4 text-white ${
                            activeLink === index ? 'bg-[#6F4FF2] mt-3 rounded-t-full md:ml-10  font-bold' : ''
                        }`}
                    onClick={() => handleNavLinkClick(index)}
                    >
                    {item.icon}
                    </NavLink>
                ))}
                <NavLink
                    to="/logout"
                    className={`p-4 flex items-center gap-4 text-white ${
                        location.pathname === '/logout' ? 'bg-[#6F4FF2] rounded-t-full mt-3 text-midnight font-bold' : ''
                    }`}
                    onClick={() => setActiveLink(null)}
                >
                    <IoLogOutOutline />
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;