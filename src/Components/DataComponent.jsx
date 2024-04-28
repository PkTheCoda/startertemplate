import React from 'react'
import supabase from '../config/supabaseClient'
import { useEffect, useState } from 'react'
import { PiLinkDuotone } from "react-icons/pi";
import { Link } from 'react-router-dom';

const sampleTags = ['All', 'Color', 'Logos', 'Gradients', 'Graphics', 'Typography',  'Inspiration', 'Mockups', 'SVGs', 'Patterns', 'Icons', 'Mockups', 'Accessibility', 'Branding', `Stock Photo`, 'Animations']

const Desources = () => {
  const [fetchError, setFetchError] = useState(null)
  const [desources, setDesources] = useState(null)
  const [filteredDesources, setFilteredDesources] = useState(null)
  const [currentFilter, setCurrentFilter] = useState(null)

  function filterDesources(tag) {

    setCurrentFilter(tag)

    if (tag === "all") {
      setFilteredDesources(desources)
    } else {
      const filteredDesources = desources.filter(
        (desource) => desource.tag === tag
      )
      setFilteredDesources(filteredDesources)
    }
  }

  console.log(supabase)

  useEffect(() => {

    const fetchDesources = async () => {
      const {data, error} = await supabase
        .from('desources')
        .select()

        if (error) {
          setFetchError("Could not fetch the Desources")
          setDesources(null)
          console.log(error)
        }

        if (data) {
          setDesources(data)
          setFilteredDesources(data)
          setFetchError(null)
          console.log(data)
        }
    }

    fetchDesources()

  }, [])

  return (
    <div className='bg-[#0f0f0f] text-white px-10 font-outfit'>
      <div className='border-t-2 border-[#2a2a2a]'>
        <div className='flex gap-x-3 my-4 mb-8 overflow-x-auto hide-scroll-bar'>
          {sampleTags.map((tag) => {
            return (
              <div
                key={tag}
                className={`px-3 bg-[#1a1a1a] border-[1px] flex border-[#2a2a2a] text-gray-400 rounded-full transition300 hover:text-slate-200 cursor-pointer shadow-lg py-1 whitespace-nowrap ${
                  currentFilter === tag.toLowerCase() ? 'bg-gray-600' : ''
                }`} // Added conditional class based on currentFilter
                onClick={() => filterDesources(tag.toLowerCase())}
              >
                {tag}
              </div>
            );
          })}
        </div>
        {fetchError && <p>{fetchError}</p>}
        <div className='py-4 pb-40'>
          {filteredDesources && (
            <div className='desources grid grid-cols-4 gap-6'>
              {filteredDesources.map((desource) => (
                <div key={desource.id} className='bg-[#1a1a1a] border-[1px] border-[#2a2a2a] shadow-xl rounded-md'>
  
                  <div className='flex flex-col gap-y-3 p-4 rounded-md'>
                    <div className='w-max rounded-xl'>
                      <img src={desource.pic_link} alt={`Logo of ${desource.name}`} className='w-10 h-10 rounded-md'/>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                      <h3 className='text-xl'>{desource.name}</h3>
                      <p className='text-md font-light text-gray-400'>{desource.description}</p>
                    </div>
                  </div>
  
                  <div className='py-3 border-t-[1px] border-[#2a2a2a] rounded-b-md flex justify-between px-4 items-center'>
                    <div
                      className='px-3 bg-[#252525] border-[1px] flex border-[#2a2a2a] text-gray-400 rounded-md transition300 hover:text-slate-200 cursor-pointer whitespace-nowrap'
                    >
                      {desource.tag.charAt(0).toUpperCase() + desource.tag.slice(1)}
                      {/* Capitalize first letter and concatenate the rest of the string */}
                    </div>

                    <a href={desource.site_link} target='_blank' className='p-1 hover:text-black transition300 hover:bg-gray-300 cursor-pointer rounded-md'>
                      <PiLinkDuotone className=''/>
                    </a>
                  </div>
  
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
}

export default Desources