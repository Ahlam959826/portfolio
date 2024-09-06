 import React from 'react'
 
 function Header() {
   return (
    <>
    <div className='bg-yellow-600 p-10'>
   < div className='flex justify-between'>
       <h1 className='text-3xl font-bold'>Code</h1>
       <ul className='text-3xl flex justify-between'>
        <li>home</li>
        <li>about us</li>
        <li>contact us</li>
       </ul>
     </div>
     
     <div className='p-10 mt-10'>
      <h1 className='text-5xl font-bold'>You dream and we built</h1>
      <p className='text-3xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quam.</p>
      <button className='px-3 py-3 rounded-xl text-3xl bg-white text-center'>Explore more</button>
     </div>
    </div>

    <div className='flex justify-evenly p-10 mt-10'>
      <div>
        <img src="src/components/https://image.shutterstock.com/image-vector/3d-high-quality-vector-mobile-260nw-2121419597.jpg"/>
        <h1 className='text-4xl font-bold' >Software Developers</h1>
        <p  className='text-3xl'>tell us what you like</p>
      </div>

      <div>
        <img src="src/components/https://image.shutterstock.com/image-vector/3d-high-quality-vector-mobile-260nw-2121419597.jpg"/>
        <h1 className='text-4xl font-bold' >Software Developers</h1>
        <p  className='text-3xl' >tell us what you like</p>
      </div>


      <div>
        <img className='w-[500px]' src="src/components/https://image.shutterstock.com/image-vector/3d-high-quality-vector-mobile-260nw-2121419597.jpg"/>
        <h1 className='text-4xl font-bold'>Software Developers</h1>
        <p className='text-3xl'>tell us what you like</p>
      </div>
      
      
      </div>
     

     
     </>
   )
 }
 
 export default Header
 