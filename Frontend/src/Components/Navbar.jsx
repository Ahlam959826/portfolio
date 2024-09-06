
import React from 'react';

const Navbar = () => {
  return (

    <nav className="bg-black p-10 flex justify-between">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">My <span className='text-blue-600'>Portfolio</span> </h1>
      <div className="space-x-4">
        <a href="#about" className="text-white hover:text-blue-500  ">Home</a>
        <a href="#skills" className="text-white hover:text-blue-500">AboutMe</a>
        <a href="#portfolio" className="text-white hover:text-blue-500">MySkills</a>
        <a href="#contact" className="text-white hover:text-blue-500">MyServices</a>
        <a href="#contact" className="text-white hover:text-blue-500">ContactMe</a>
      </div>
      <button className='px-2 py-2 text-white bg-blue-700 rounded-2xl hover:text-blue-500'>Subscribe</button>

    </div>
  </nav>




  );
};

export default Navbar;