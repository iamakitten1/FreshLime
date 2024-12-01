import React from 'react'
import {
  IoSpeedometerOutline, IoCloseOutline,
  IoPulseOutline,
  IoPause,
  IoRocketOutline,
} from "react-icons/io5";


export default function Pricing() {
  return (
    <div className="px-6 lg:px-48">
      <p className="text-[#077252] font-semibold text-left text-lg lg:text-2xl uppercase mt-40">
        pricing
      </p>
      <p className="font-bold text-2xl lg:text-4xl text-left mb-8 text-[#333]">
        Get your dream body
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
        {/* Monthly Card */}
        <div className="flex flex-col items-center h-fit py-6 px-4 sm:px-8 lg:px-12 bg-white border-2 border-[#e6f2ef] rounded-lg w-fit  md:w-fit lg:w-fit">
          <div className="text-center">
            <p className="font-semibold text-[#077252] text-lg lg:text-2xl">
               MONTHLY
            </p>
            <p className="font-extrabold text-xl lg:text-3xl mt-2">
              $ <span className="text-4xl lg:text-5xl">45</span>
            </p>
            <p className="font-semibold text-[#777] text-sm lg:text-lg mt-2">
              Pay every single month
            </p>
            <ul className="text-base lg:text-lg w-64 mx-auto mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <IoSpeedometerOutline className="text-[#40c057] h-6 w-6" />
                High quality stuff
              </li>
              <li className="flex items-center gap-3">
                <IoSpeedometerOutline className="text-[#40c057] h-6 w-6" />
                Open 24/7
              </li>
              <li className="flex items-center gap-3">
                <IoSpeedometerOutline className="text-[#40c057] h-6 w-6" />
                Every 10th protein free
              </li>
              <li className="flex items-center gap-3">
                <IoCloseOutline className="text-[#40c057] h-6 w-6" />
                
              </li>
            </ul>
            <button className="text-white bg-[#087f5b] rounded-md px-6 py-3 mt-6">
              Get your month pass
            </button>
          </div>
        </div>

        {/* Yearly Card */}
        <div className="flex flex-col overflow-hidden items-center h-fit py-6 px-4 sm:px-8 lg:px-12 bg-[#e6f2ef] rounded-lg w-fit md:w-fit lg:w-fit relative">
          <div className="text-center">
            <p className="font-semibold text-[#077252] text-lg lg:text-2xl">
               YEARLY
            </p>
            <p className="font-extrabold text-xl lg:text-3xl mt-2">
              $ <span className="text-4xl lg:text-5xl">600</span>
            </p>
            <p className="font-semibold text-[#777] text-sm lg:text-lg mt-2">
              Per month it's just $30
            </p>
            <ul className="text-base lg:text-lg w-64 mx-auto mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <IoSpeedometerOutline className="text-[#40c057] h-6 w-6" />
                Free sauna
              </li>
              <li className="flex items-center gap-3">
                <IoSpeedometerOutline className="text-[#40c057] h-6 w-6" />
                Free chocolate bars
              </li>
              <li className="flex items-center gap-3">
                <IoSpeedometerOutline className="text-[#40c057] h-6 w-6" />
                Champ with you
              </li>
              <li className="flex items-center gap-3">
                <IoSpeedometerOutline className="text-[#40c057] h-6 w-6" />
                Plan of the year
              </li>
            </ul>
            <button className="text-white bg-[#087f5b] rounded-md px-6 py-3 mt-6">
              Get your yearly pass
            </button>
            <div className="absolute top-10 -right-10 rotate-45">
              <p className="bg-[#94d82d] text-center text-[#333] text-xs font-bold px-16 py-1">
                BEST VALUE
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-12 text-base lg:text-lg mb-12 text-[#333]">
        Prices include all applicable taxes. You can cancel at any time. Both
        plans include the following:
      </p>

      {/* Benefit Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-4 px-4">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="rounded-full bg-[#b5d9ce] p-4">
            <IoPulseOutline className="text-[#087f5b] h-8 w-8" />
          </div>
          <p className="font-bold text-lg">Train every day!</p>
          <p className="text-sm leading-relaxed text-[#333]">
            Our gym is open 365 days a year, even holidays you can come.
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="rounded-full bg-[#b5d9ce] p-4">
            <IoRocketOutline className="text-[#087f5b] h-8 w-8" />
          </div>
          <p className="font-bold text-lg">Natural and organic</p>
          <p className="text-sm leading-relaxed text-[#333]">
           
          Our proteins are best in the world and organic good for health
            
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="rounded-full bg-[#b5d9ce] p-4">
            <IoRocketOutline className="text-[#087f5b] h-8 w-8" />
          </div>
          <p className="font-bold text-lg">Motivation</p>
          <p className="text-sm leading-relaxed text-[#333]">
           
          We have motivation speakers to motivate you every day
            
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="rounded-full bg-[#b5d9ce] p-4">
            <IoPause className="text-[#087f5b] h-8 w-8" />
          </div>
          <p className="font-bold text-lg">Pause anytime</p>
          <p className="text-sm leading-relaxed text-[#333]">
            
          You got full year and have vacation? pause it, it is possible with
              us
            
          </p>
        </div>
      </div>
    </div>
  );
}





