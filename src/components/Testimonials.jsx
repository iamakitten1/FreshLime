import React from 'react'

export default function Testimonials() {
  return (
    <div className='testimonial-container bg-[#e6f2ef] '>
      {/* head */}
      <div>
        <span className='head text-[#077252] font-semibold text-[1.4rem] md:text-[1.6rem] uppercase mt-8'> how we work</span>
        <h2 className='second-head font-bold text-[2rem] text-[#333] md:text-[3rem] mb-4 md:mb-8'> Our benefits and skills  <br/> that make u happy </h2>
      </div>
      {/* content */}
      <div className='content  flex flex-col md:flex-row justify-center items-center pt-20 px-4 md:px-8 lg:px-12'>

        {/* testimolianls */}
        <div className='testimonials grid grid-cols-2 gap-6'>
          {/* each testimonial */}
          <figure className='testimonial-1'>
            <img src="/public/images/customer-1.jpg" alt="Customer image" className='img rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 ' />
            <blockquote className='coment text-[#333]'>
              " Hi there lola here, I never liked gym before. I am lazy
              hahahaha, but in Fresh Lime you just can't be lazy, wanna work
              hours and never stop!
              "
            </blockquote>
            <span className='name text-[#333]'>— Lola Lee </span>
          </figure>
          <figure className='testimonial-2'>
            <img src="/public/images/customer-2.jpg" alt="Customer image" className='img rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 ' />
            <blockquote className='coment text-[#333]'>
              "
              I'm from Maldives and I never seen Gym like Fresh Lime, love
              everything. They have best machines for chest and my wife loves
              it.
              "
            </blockquote>
            <span className='name text-[#333]'>— Marcus Stanford </span>
          </figure>
          <figure className='testimonial-3'>
            <img src="/public/images/customer-3.jpg" alt="Customer image" className='img rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 ' />
            <blockquote className='coment text-[#333]'>
              "
              In Fresh Lime I'm feeling like home, best stuff, amazing
              personal stuff, one of the best protain bars inside. I love
              everything!
              "
            </blockquote>
            <span className='name text-[#333]'>— Marta Hansen </span>
          </figure>
          <figure className='testimonial-4'>
            <img src="/public/images/customer-4.jpg" alt="Customer image" className='img rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 ' />
            <blockquote className='coment text-[#333]'>
              "
              When I started I was skinny, Now I'm like mountain. Every single
              day coming to fresh line gave me energy, passion, happiness, joy
              and love!
              "
            </blockquote>
            <span className='name text-[#333]'>— Steve Maccarthury </span>
          </figure>

        </div>




        {/* galery */}
        <div className='galery grid grid-cols-3 gap-4 p-6 mt-8'>
          <figure className='galery-img-1 '>
            <img src="/public/images/gym-1.jpg" alt="" className=' w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-full md:h-auto transition-transform rounded-2xl duration-500 ease-in-out hover:scale-105 hover:rounded-none' />
          </figure>
          <figure className='galery-img-2'>
            <img src="/public/images/gym-2.jpg" alt="" className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-full md:h-auto transition-transform rounded-2xl duration-500 ease-in-out hover:scale-105 hover:rounded-none' />
          </figure>
          <figure className='galery-img-3'>
            <img src="/public/images/gym-3.jpg" alt="" className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-full md:h-auto transition-transform rounded-2xl duration-500 ease-in-out hover:scale-105 hover:rounded-none' />
          </figure>
          <figure className='galery-img-4'>
            <img src="/public/images/gym-4.jpg" alt="" className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-full md:h-auto transition-transform rounded-2xl duration-500 ease-in-out hover:scale-105 hover:rounded-none' />
          </figure>
          <figure className='galery-img-5'>
            <img src="/public/images/gym-1.jpg" alt="" className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-full md:h-auto transition-transform rounded-2xl duration-500 ease-in-out hover:scale-105 hover:rounded-none' />
          </figure>
          <figure className='galery-img-6'>
          <img src="/public/images/gym-6.jpg" alt="" className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-full md:h-auto transition-transform rounded-2xl duration-500 ease-in-out hover:scale-105 hover:rounded-none" />
          </figure>
        </div>
      </div>
    </div>
  )
}
