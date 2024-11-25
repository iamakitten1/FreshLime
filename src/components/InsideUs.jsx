import React from 'react'

export default function InsideUs() {
  return (
    <div className="bg-gray px-[5%] md:px-[10%]">
      <p className="text-[#077252] font-[600] text-[1.4rem] md:text-[1.6rem] uppercase mt-[8rem]">
        Inside us
      </p>
      <p className="font-[700] text-[2.5rem] md:text-[3rem] mb-[3rem]">
        At our gym, you will find everything you need
      </p>

      {/* Main container with flex-wrap to handle responsiveness */}
      <div className="flex flex-wrap gap-[2rem] justify-center mx-auto mb-[6rem] bg-white">
        {/* Cardio Part */}
        <div className="flex-1 flex flex-col rounded-[0.6875rem] items-center max-w-[20rem]">
          <img
            src={cardgym1}
            alt="gym"
            className="rounded-t-[0.6875rem] w-full"
          />
          <div className="text-left w-full pl-[10%]">
            <p className="rounded-full bg-[#51cf66] font-[600] text-[0.8rem] md:text-[0.9rem] w-fit px-2 mt-4">
              FRESH NEW CARDIO
            </p>
            <p className="font-[600] text-[1.4rem] md:text-[1.6rem] mt-2">
              Cardio Part
            </p>
            <ul className="text-[1rem] md:text-[1.125rem] mt-2 space-y-4">
              <li className="flex items-center gap-3">
                <IoSpeedometerOutline className="text-[#40c057] h-6 w-6" />
                High tempo cardio
              </li>
              <li className="flex items-center gap-3">
                <IoEyeOutline className="text-[#40c057] h-6 w-6" />
                Best view
              </li>
              <li className="flex items-center gap-3">
                <IoBodyOutline className="text-[#40c057] h-6 w-6" />
                All kinds
              </li>
            </ul>
          </div>
        </div>

        {/* Strength Part */}
        <div className="flex-1 flex flex-col rounded-[0.6875rem] items-center max-w-[20rem]">
          <img
            src={cardgym1}
            alt="gym"
            className="rounded-t-[0.6875rem] w-full"
          />
          <div className="text-left w-full pl-[10%]">
            <p className="rounded-full bg-[#51cf66] font-[600] text-[0.8rem] md:text-[0.9rem] w-fit px-2 mt-4">
              FRESH NEW STRENGTH
            </p>
            <p className="font-[600] text-[1.4rem] md:text-[1.6rem] mt-2">
              Strength Part
            </p>
            <ul className="text-[1rem] md:text-[1.125rem] mt-2 space-y-4">
              <li className="flex items-center gap-3">
                <IoBarbellOutline className="text-[#40c057] h-6 w-6" />
                <span className="font-[700]">100KG</span> plus
              </li>
              <li className="flex items-center gap-3">
                <IoTrophyOutline className="text-[#40c057] h-6 w-6" />
                Champion
              </li>
              <li className="flex items-center gap-3">
                <IoVolumeHighOutline className="text-[#40c057] h-6 w-6" />
                Support
              </li>
            </ul>
          </div>
        </div>

        {/* Our Equipment - centered on smaller screens */}
        <div className="flex-1 w-full md:w-auto order-last md:order-none flex flex-col items-center text-center font-[800] text-[1.75rem] md:text-[2rem] max-w-[20rem]">
          <ul>
            <li>Our Equipment</li>
            <li className="flex gap-3 text-[1rem] md:text-[1.125rem] font-[500] mt-[1.125rem]">
              <IoCheckmarkDoneOutline className="text-[#40c057] h-7 w-7" />
              CHEST PRESS MACHINE
            </li>
            <li className="flex gap-3 text-[1rem] md:text-[1.125rem] font-[500] mt-[1.125rem]">
              <IoCheckmarkDoneOutline className="text-[#40c057] h-7 w-7" />
              SEATED DIP MACHINE
            </li>
            <li className="flex gap-3 text-[1rem] md:text-[1.125rem] font-[500] mt-[1.125rem]">
              <IoCheckmarkDoneOutline className="text-[#40c057] h-7 w-7" />
              CHEST FLY MACHINE
            </li>
            <li className="flex gap-3 text-[1rem] md:text-[1.125rem] font-[500] mt-[1.125rem]">
              <IoCheckmarkDoneOutline className="text-[#40c057] h-7 w-7" />
              BENCH PRESS
            </li>
            <li className="flex gap-3 text-[1rem] md:text-[1.125rem] font-[500] mt-[1.125rem]">
              <IoCheckmarkDoneOutline className="text-[#40c057] h-7 w-7" />
              INCLINE BENCH PRESS
            </li>
            <li className="flex gap-3 text-[1rem] md:text-[1.125rem] font-[500] mt-[1.125rem]">
              <IoCheckmarkDoneOutline className="text-[#40c057] h-7 w-7" />
              ADJUSTABLE BENCH
            </li>
            <li className="flex gap-3 text-[1rem] md:text-[1.125rem] font-[500] mt-[1.125rem]">
              <IoCheckmarkDoneOutline className="text-[#40c057] h-7 w-7" />
              OLYMPIC WEIGHT BENCH
            </li>
            <li className="flex gap-3 text-[1rem] md:text-[1.125rem] font-[500] mt-[1.125rem]">
              <MdOutlineAddToPhotos className="text-[#40c057] h-7 w-7" />
              AND WAY MORE
            </li>
          </ul>
        </div>
      </div>

      <a
        href="#"
        className="underline text-[#087f5b] text-[1rem] md:text-[1.125rem] font-[500]"
      >
        Check our equipment →
      </a>
    </div>
  );
}
