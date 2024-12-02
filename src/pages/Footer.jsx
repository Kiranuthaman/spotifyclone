import React from 'react'
import './Header.css'

function Footer() {
  return (
    <>
    <div className='w-full  d-flex justify-content-between '  id='gradient'>
     <div className=' mt-2 text-light text-bold p-2'>
      
      <p>Sign up for spotify for unlimited songs and podcast</p>
     </div>
     <div className='mt-3 mb-3 me-5'>
      <button className='btn btn-light rounded-4 text-dark p-2' style={{fontWeight:'bold'}}>Sign Up free</button>
     </div>
    </div>
    </>
  )
}

export default Footer