import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-ful bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={ Laptop} alt='#'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloribus delectus rem officiis autem corporis sit optio quidem, culpa omnis distinctio iste perferendis repudiandae harum quasi possimus officia? Molestiae, dolor.</p>
                <button className='bg-black w-[200px] rounded-md font-medium mx-auto md:mx-0 my-6  py-3 text-[#00df9a] '>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics