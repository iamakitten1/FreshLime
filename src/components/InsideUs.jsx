import React from 'react'
import { IoAccessibilityOutline, IoSpeedometerOutline, IoCheckmarkDoneOutline, IoEyeOutline, IoBarbellOutline, IoTrophyOutline, IoVolumeHighOutline } from "react-icons/io5";
import { MdOutlineAddToPhotos } from "react-icons/md";




export default function InsideUs() {
  return (
    <section>
       <div className="container-head text-center text-[#333]">
        <p className="text-[#077252] tracking-wider font-bold uppercase mt-[8rem]">
          Inside us
        </p>
        <p className="font-bold text-[2rem] md:text-[55px] tracking-tighter mb-[3rem]">
          At our gym you will find everything you need
        </p>
      </div>

      <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2rem] justify-center mx-auto mb-[6rem] px-6 md:px-24'>
        <div className='card-1 flex flex-col rounded-[0.6875rem] items-center max-w-[20rem] hover:-translate-y-[15px] transition-transform duration-500'>
          <img src="/images/cardio-img.jpg" alt="Cardio image" className='rounded-t-[0.6875rem] w-full' />
          <div className='gym-content text-left bg-[#f1eaea] shadow-2xl w-full pb-[15%] pl-[10%] rounded-b-[0.6875rem]'>
            <h2 className='tag rounded-full bg-[#51cf66] font-semibold text-[0.8rem] md:text-[0.9rem] w-fit px-2 mt-4'>
              Fresh new cardio
            </h2>
            <p className='card-name font-semibold text-[1.4rem] md:text-[1.6rem] mt-2'>Cardio part</p>
            <ul className='card-items-list text-[1rem] md:text-[1.125rem] mt-2 space-y-4'>
              <li className='items-list flex items-center gap-3'>
                <IoSpeedometerOutline className="text-[#40c057] h-6 w-6" />
                <span>High tempo cardio</span>
              </li>
              <li className='items-list flex items-center gap-3'>
                <IoEyeOutline className="text-[#40c057] h-6 w-6" />
                <span>Best view</span>
              </li>
              <li className='items-list flex items-center gap-3'>
                <IoAccessibilityOutline className="text-[#40c057] h-6 w-6" />
                <span>All kinds</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='card-2 flex flex-col rounded-[0.6875rem] items-center max-w-[20rem] hover:-translate-y-[15px] transition-transform duration-500'>
          <img src="/images/bars.jpg" alt="Best Bars" className='rounded-t-[0.6875rem] w-full' />
          <div className='gym-content text-left bg-[#f1eaea] shadow-2xl w-full pb-[15%] pl-[10%] rounded-b-[0.6875rem]'>
            <h2 className='tag rounded-full bg-[#94d82d] font-semibold text-[0.8rem] md:text-[0.9rem] w-fit px-2 mt-4'>
              Heavy Bars
            </h2>
            <p className='card-name font-semibold text-[1.4rem] md:text-[1.6rem] mt-2'>Best Bars</p>
            <ul className='card-items-list text-[1rem] md:text-[1.125rem] mt-2 space-y-4'>
              <li className='items-list flex items-center gap-3'>
                <IoBarbellOutline className="text-[#40c057] h-6 w-6" />
                <span>100KG</span>
              </li>
              <li className='items-list flex items-center gap-3'>
                <IoTrophyOutline className="text-[#40c057] h-6 w-6" />
                <span>Champion</span>
              </li>
              <li className='items-list flex items-center gap-3'>
                <IoVolumeHighOutline className="text-[#40c057] h-6 w-6" />
                <span>Support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='equipment pt-7'>
  <h3 className='heading font-[800] text-[1.75rem] text-[#333]'>Our equipment</h3>
  <ul className="list order-last mt-10 space-y-4">
    <li className="flex gap-3 text-[1rem] md:text-[1.125rem] font-[1.8rem] mt-[1.125rem] text-[#333] leading-none">
      <IoCheckmarkDoneOutline className="list-icon" size={24} color="#40c057" />
      CHEST PRESS MACHINE
    </li>
    <li className="flex gap-3 text-[1rem] md:text-[1.125rem] font-[1.8rem] mt-[1.125rem] text-[#333] leading-none">
      <IoCheckmarkDoneOutline className="list-icon" size={24} color="#40c057" />
      SEATED DIP MACHINE
    </li>
    <li className="flex gap-3 text-[1rem] md:text-[1.125rem] font-[1.8rem] mt-[1.125rem] text-[#333] leading-none">
      <IoCheckmarkDoneOutline className="list-icon" size={24} color="#40c057" />
      SEATED DIP MACHINE
    </li>
    <li className="flex gap-3 text-[1rem] md:text-[1.125rem] font-[1.8rem] mt-[1.125rem] text-[#333] leading-none">
      <IoCheckmarkDoneOutline className="list-icon" size={24} color="#40c057" />
      BENCH PRESS
    </li>
    <li className="flex gap-3 text-[1rem] md:text-[1.125rem] font-[1.8rem] mt-[1.125rem] text-[#333] leading-none">
      <IoCheckmarkDoneOutline className="list-icon" size={24} color="#40c057" />
      INCLINE BENCH PRESS
    </li>
    <li className="flex gap-3 text-[1rem] md:text-[1.125rem] font-[1.8rem] mt-[1.125rem] text-[#333] leading-none">
      <IoCheckmarkDoneOutline className="list-icon" size={24} color="#40c057" />
      ADJUSTABLE BENCH
    </li>
    <li className="flex gap-3 text-[1rem] md:text-[1.125rem] font-[1.8rem] mt-[1.125rem] text-[#333] leading-none">
      <IoCheckmarkDoneOutline className="list-icon" size={24} color="#40c057" />
      OLYMPIC WEIGHT BENCH
    </li>
    <li className="flex gap-3 text-[1rem] md:text-[1.125rem] font-[1.8rem] mt-[1.125rem] text-[#333] leading-none">
      <IoCheckmarkDoneOutline className="list-icon" size={24} color="#40c057" />
      GHD MACHINE
    </li>
    <li className="flex gap-3 text-[1rem] md:text-[1.125rem] font-[1.8rem] mt-[1.125rem] text-[#333] leading-none">
      <MdOutlineAddToPhotos className="list-icon" size={24} color="#40c057" />
      ADD WAY MORE
    </li>
  </ul>
</div>

{/* Responsive design - Adjust the list styling on mobile */}
<style jsx>{`
  @media (max-width: 768px) {
    .equipment {
      padding-top: 2rem;
    }

    .list {
      margin-top: 1rem;
      padding-left: 1rem;
    }

    .list li {
      font-size: 1rem;
      margin-top: 1.5rem;
    }

    .list-icon {
      font-size: 20px;
    }
  }
`}</style>



        <div className='all-equip' > </div>

        <a
          href="#"
          className="underline text-[#087f5b] text-[1rem] md:text-[1.125rem] font-[500] hover:no-underline transition-transform duration-500"
        >
          Check our equipment →
        </a>


      </div>
    </section>

  );
}
