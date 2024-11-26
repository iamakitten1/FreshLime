import React from 'react'
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { MdOutlineAddToPhotos } from "react-icons/md";



export default function InsideUs() {
  return (
    <section>
      <div className="container-head text-center text-[#333]">
      <p className="  text-[#077252] tracking-wider font-[700]   uppercase mt-[8rem]">
        Inside us
      </p>
      <p className="font-[700] text-[55px] tracking-tighter  mb-[3rem]">
        At our gym you will find everything you need
      </p>
    </div>

    <div className='container grid grid-3-columns margin-bottom-md '>
      <div className='card-1'> </div>
      <div className='card-2'> </div>
      <div className='equipment'>  
        <h3 className='heading'> Our equipment</h3>
        <ul className="list">
      <li className="list-item">
        <IoCheckmarkDoneOutline className="list-icon" size={24} color="#40c057" /> 
        CHEST PRESS MACHINE
      </li>
      <li className="list-item">
        <IoCheckmarkDoneOutline className="list-icon" size={24} color="#40c057" /> 
        SEATED DIP MACHINE
      </li>
      <li className="list-item">
        <IoCheckmarkDoneOutline className="list-icon" size={24} color="#40c057" /> 
        SEATED DIP MACHINE
      </li>
      <li className="list-item">
        <IoCheckmarkDoneOutline className="list-icon" size={24} color="#40c057" /> 
        BENCH PRESS
      </li>
      <li className="list-item">
        <IoCheckmarkDoneOutline className="list-icon" size={24} color="#40c057" /> 
        INCLINE BENCH PRESS
      </li>
      <li className="list-item">
        <IoCheckmarkDoneOutline className="list-icon" size={24} color="#40c057" /> 
        ADJUSTABLE BENCH
      </li>
      <li className="list-item">
        <IoCheckmarkDoneOutline className="list-icon" size={24} color="#40c057" /> 
        OLYMPIC WEIGHT BENCH
      </li>
      <li className="list-item">
        <IoCheckmarkDoneOutline className="list-icon" size={24} color="#40c057" /> 
        GHD MACHINE
      </li>
      <li className="list-item">
        <MdOutlineAddToPhotos className="list-icon" size={24} color="#40c057" /> 
        ADD WAY MORE
      </li>
    </ul>
      </div>
      <div className='all-equip' > </div>

    </div>
    </section>
    
  );
}
