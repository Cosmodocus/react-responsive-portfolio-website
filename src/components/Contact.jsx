import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/ce66e89a-16f3-40dd-8203-ad8630371ad6" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#00b894]  text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - myemail@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded-2xl' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-2xl' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 rounded-xl'
            name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#00b894] rounded-2xl hover:border-[#00b894]  px-4 py-3 mx-auto flex items-center my-8'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact 
