import React from 'react'
import herographic from '../Images/herographic3.svg'

const sampleTags = ['Colors', 'Logos', 'Gradients', 'Graphics', 'Typography', 'Icons', 'Inspiration', 'Mockups', 'SVGs', 'Patterns', 'Icons', 'Inspiration', 'Mockups']

const Hero = () => {
  return (
    <div className='bg-[#0f0f0f] py-28 pb-40 text-white font-outfit flex flex-col items-center justify-center relative overflow-hidden'>

      <img src={herographic} alt="Hero Graphic" className='px-6 absolute opacity-50  md:-bottom-10 lg:-bottom-20'/>


      <div className='max-w-6xl flex flex-col gap-y-4 items-center z-20'>


        <div className="bg-gray-800 rounded-md px-4 py-1 text-slate-400 font-semibold w-max text-sm">
          NEW RESOURCES DAILY
        </div>

        <div className='flex flex-col items-center six-title tracking-tight'>
          <h1>The World's Largest Collection of</h1>
          <h1 className="block"><span className="text-sky-300">De</span>sign Re<span className="text-sky-300">sources</span></h1>
        </div>

        <h4 className='font-light text-gray-400 text-lg max-w-xl text-center'>
          Find Hundreds of Websites and Resources - tailored for Developers, Designers, Illustrators. Always Free.
        </h4>

        <div class="max-w-[45rem]">

          <form className=''>   
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
              <div class="relative">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                  <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-sky-500 hover:bg-sky-800 transition300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
          </form>

          <div className='mt-4 flex justify-center gap-3 flex-wrap items-center'>
            {sampleTags.map((tag) => {
              return (
                <div className='px-3 bg-gray-800 rounded-lg py-1'>
                  {tag}
                </div>
              )
            })}
          </div>

          {/* <p class="mt-5 text-center font-light text-slate-300">This search input component is part of a larger, open-source library of Tailwind CSS components. Learn
            more
            by going to the official <a class="text-blue-600 hover:underline"
              href="#" target="_blank">Flowbite Documentation</a>.
          </p> */}
            
        </div>



      </div>
    </div>
  )
}

export default Hero