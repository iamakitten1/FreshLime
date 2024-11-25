import React from 'react';
import Button from '/src/components/UiComponents/Button.jsx';

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row gap-24 justify-center bg-[#e6f2ef] py-[150px] z-auto">
      <div className="flex flex-col items-center mr-[50px]">
        <h2 className="text-[50px] text-justify text-[#333] font-extrabold leading-none mt-[40px]">
          Welcome to the <br />
          one of the best <br />
          Gym Freshlime
        </h2>

        <p className="text-[24px] text-[#333]  text-justify mt-[60px]">
          This is the cheapest, comfortable, best price <br />
          with world champion coaches and one of <br />
          the best bartenders for your protein shakes.
        </p>
        <div className="flex justify-between items-center mt-[70px] ">
          <Button
            text="Get your month pass"
            size="large"
            customClasses="mr-[10px] border-double border-4 hover:border-[#087f5b]"
          />
          <Button
            text="Learn more ↓"
            size="medium"
            customClasses="bg-white !text-[#1e293b] rounded-[9px] border-[1px] text-[16px]   w-[160px] h-[50px]
             hover:bg-[#d1d5db] hover:text-[#1e293b] hover:border-[white] hover:border-double hover:border-4 transition-all ease-in-out duration-200"
          />

        </div>

        <div className="flex items-center mt-[100px]">
          <img
            src='/images/customer-1.jpg'
            alt="customer"
            className="w-[48px] h-[48px] rounded-full border-[3px] mr-[-15px]"
          />
          <img
            src='/images/customer-2.jpg'
            alt="customer"
            className="w-[48px] h-[48px] rounded-full border-[3px] mr-[-15px]"
          />
          <img
            src='/images/customer-3.jpg'
            alt="customer"
            className="w-[48px] h-[48px] rounded-full border-[3px] mr-[-15px]"
          />
          <img
            src='/images/customer-4.jpg'
            alt="customer"
            className="w-[48px] h-[48px] rounded-full border-[3px] mr-[-15px]"
          />
          <img
            src='/images/customer-5.jpg'
            alt="customer"
            className="w-[48px] h-[48px] rounded-full border-[3px] mr-[-15px]"
          />
          <img
            src='/images/customer-6.jpg'
            alt="customer"
            className="w-[48px] h-[48px] rounded-full border-[3px]"
          />
          <p className="ml-[6px] font-[700] text-[16px]">
            from the{" "}
            <span className="bg-[#087f5b] text-transparent bg-clip-text">
              whole
            </span>{" "}
            world!
          </p>
        </div>
      </div>

      <div className="basis-4/12 rounded-[8px] flex items-center justify-center">
        <img
          src='/images/gym.jpg'
          alt="gym"
          className="rounded-[8px] shadow-[0_1px_15px_0px_#077252] w-[50%] md:w-fit"
        />
      </div>
    </div>
  );
}
