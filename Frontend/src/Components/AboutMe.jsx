
import React from 'react';

const AboutMe = () => {
  return (
    <div className='bg-black '>
    <div className='p-10  flex justify-evenly bg-gray-900 gap-10'>
      <img className='w-[250px] ' src="front-view-woman-posing-with-beautiful-flowers.jpg" />
      <div>
       <h1 className='text-white text-4xl font-semibold mt-5'><span className='text-blue-600'>About</span> Me</h1>
       <h2 className='text-white text-xl font-semibold mt-5'>Focuses More on <span className='text-blue-600'>Design Excellance & Functionality</span></h2>
       <p className='text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Incidunt fugit pariatur fugiat, eius, iure <br /> sunt autem expedita labore repellat obcaecati facere magnam asperiores illum! <br /> Itaque repudiandae possimus expedita dolore commodi.</p>
      </div>
      </div>
      </div>
  );
};

export default AboutMe;
