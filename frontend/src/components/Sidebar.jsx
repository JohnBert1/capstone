import React from 'react'
import {useLocation, useNavigate} from "react-router-dom"
import clx from "clsx"
//icons
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { TbLayoutDashboard } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { LuCalendarCheck } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
function Sidebar() {
  const navigate = useNavigate()
  //const sideBarTabs = ["Dashboard", "Members", "Attendance", "Resources", "Analytics", "Settings"]
  const sideBarTabs = [
  {label: 'Dashboard', icon: <TbLayoutDashboard size={30}/>, link: "/dashboard" },
  {label: 'Members', icon: <LuUsers size={30}/>, link: "/members"},
  {label: 'Attendance', icon: <LuCalendarCheck size={30}/>, link: "/attendance"},
  {label: 'Resources', icon: <IoBookOutline size={30} />},
  {label: 'Analytics', icon: <VscGraph size={30}/>, link: "/analytics"},
  {label: 'Settings', icon: <IoSettingsOutline size={30}/>, link: "/settings"}
  ];
  return (
    <div className='w-full'>
      <header className='flex flex-row items-center justify-between px-6 border-b-2 border-gray-200 py-4 bg-white'>
        <div className='flex w-full gap-5 flex-row items-center'>
          <img 
          className='h-15 w-15 rounded-full'
          src="https://tse1.mm.bing.net/th/id/OIP.cRULNjbsoWX5cAijZSnnCgAAAA?pid=ImgDet&w=199&h=199&c=7&dpr=1.1" 
          alt="" />
          <h1>LampKonek</h1>
        </div>
        
        <div className='bg-white'>
          <MdOutlineArrowBackIosNew />
        </div>
      </header>
      {/* Tabs */}
      <div className='px-5 pt-2 h-full'>
        <ul className='flex flex-col gap-2'>
          {sideBarTabs.map((tabs, index) => (
            <li
            onClick={() => navigate(tabs.link)}
            className={clx('flex text-xl p-3 rounded-lg gap-2 flex-row items-center hover:bg-gray-200', location.pathname === tabs.link ? "bg-gray-200": "")}
            key={index}>
              {tabs.icon}
              {tabs.label}
            </li>
          ))}

         
        </ul>
      </div>
       <div className='p-2 border-t-2'>
         <li
          className='flex absolute bottom-0 flex-row p-3 border-t-2 rounded-lg text-xl items-center gap-2 hover:bg-gray-200'
          ><LuLogOut size={30}/>Logout</li>
       </div>
    </div>
  )
}

export default Sidebar
