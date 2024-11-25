import React from 'react'

export default function Feature() {
    return (
      <section className="pt-9 pb-20 max-w-screen-xl mx-auto px-6">
        <h2 className="text-center font-Rubik text-xs text-gray-500 font-medium pb-5 lg:text-sm">
          As featured in hello
        </h2>
        <div className="flex items-center gap-3 justify-center w-full md:justify-between">
          <img
            src="/images/techcrunch.png"
            alt="tech image"
            className="max-h-[2rem] opacity-[50%] grayscale"
          />
          <img
            src="/images/business-insider.png"
            alt="business image"
            className="max-h-[2rem] opacity-[50%] grayscale"
          />
          <img
            src="/images/the-new-york-times.png"
            alt="new york image"
            className="max-h-[2rem] opacity-[50%] grayscale"
          />
          <img
            src="/images/forbes.png"
            alt="forbes image"
            className="max-h-[2rem] opacity-[50%] grayscale"
          />
          <img
            src="/images/usa-today.png"
            alt="usa image"
            className="max-h-[2rem] opacity-[50%] grayscale"
          />
        </div>
      </section>
    );
  }
  
