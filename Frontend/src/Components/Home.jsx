
import React from 'react';

function Home() {
  return (
    <>
    
    
    <div className='bg-black p-10 flex justify-evenly'>
       <div>
        <p className='text-white mt-10'>Hi, My Name is </p>
        <h1 className='text-white font-semibold text-3xl mt-5'>Ahlam <span className='text-blue-600'>Ahmed Muhammed</span></h1>
        <h2 className='text-white mt-5'>I'am a Full-Stack Developer</h2>
        <input className='mt-5 rounded-xl px-10 py-2' type='email'></input>
        <button className='bg-blue-700 rounded-3xl text-white py-1 px-1 hover:text-blue-600 '>Let'Chat</button>
      </div>
      <img className='w-[300px] -mt-20' src="front-view-woman-posing-with-beautiful-flowers.png"/>
      </div>
    

  </>
  )
}

export default Home