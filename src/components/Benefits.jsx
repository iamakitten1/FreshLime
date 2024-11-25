import React from 'react';

export default function Benefits() {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-8 px-20">
      <div className="flex flex-col w-[100%] ">
        <p className="text-[#077252] font-[700] text-sm tracking-wider self-start">
          HOW WE WORK
        </p>
        <h1 className="text-[#333] font-[700] text-5xl  mb-16 tracking-tighter text-left">
          Our benefits and skills that make u happy
        </h1>
      </div>

      <div className='flex flex-col  w-[100%] px-16'>
         {/* Benefit 01 */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full mb-16">
        <div className="text-left flex-1">
          <p className="text-[#ddd] text-9xl font-medium">01</p>
          <p className="font-[700] text-[#333] text-2xl  leading-5tracking-wide mt-4">
            For all 7 days in week our diet plan
          </p>
          <p className="text-xl text-[#333]  font-normal mt-4">
            We have our own brand chef, who created diet meal plans for every
            single human being's body type, and all of this is included in the
            subscription price.
          </p>
        </div>
        <div className="ml-8 flex-1 flex bg-[#e6f2ef] p-8 rounded-lg justify-center items-center">
          <div className="bg-[#b5d9ce]  flex p-4  rounded-lg justify-center items-center">
            <img
              src="/images/meal-1.jpg"
              alt="Meal"
              className="rounded-lg w-4/5"
            />
          </div>
        </div>
      </div>

      {/* Benefit 02 */}
      <div className="flex flex-col md:flex-row-reverse justify-center items-center w-full mb-16">
        <div className="text-left flex-1">
          <p className="text-[#ddd] text-9xl font-medium">02</p>
          <p className="font-[700] text-[#333] text-2xl tracking-wide mt-4">
            Personalized training sessions
          </p>
          <p className="text-xl text-[#333] font-normal mt-4">
            In our gym, you'll meet world-class champions of bodybuilding, who
            will guide you to achieve your fitness goals.
          </p>
        </div>        
        <div className="  bg-[#e6f2ef] h-[50%] w-fit flex-1 flex mr-8 p-4 rounded-lg justify-evenly  items-center">
          <div className="bg-[#b5d9ce] p-4 flex justify-center items-cente h-100 rounded-lg">
            <img
              src="/images/personal-trainer.jpg"
              alt="Personal Trainer"
              className="rounded-lg w-4/5"
            />
          </div>
        </div>
      </div>

      {/* Benefit 03 */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <div className="text-left flex-1">
          <p className="text-[#ddd] text-9xl font-medium">03</p>
          <p className="font-[700] text-[#333] text-2xl tracking-wide mt-4">
            Modern gym equipment
          </p>
          <p className="text-xl text-[#333] font-normal mt-4">
            Our gym is equipped with the latest machines and tools to ensure
            your workouts are effective and enjoyable.
          </p>
        </div>
        <div className="ml-8 flex-1 flex bg-[#e6f2ef] p-4 rounded-lg justify-center items-center">
          <div className="bg-[#b5d9ce] p-4 rounded-lg">
            <img
              src="/images/equipment.jpg"
              alt="Equipment"
              className="rounded-lg w-4/5"
            />
          </div>
        </div>
      </div>
        
      </div>

     
    </div>
  );
}
