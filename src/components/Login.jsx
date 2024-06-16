import React from 'react'

function Login() {
  return (
    <div className='flex justify-center items-center h-full m-4'>
        <div className='bg-white flex flex-col items-center  rounded-xl gap-6 p-6'>
            <div className=''>
                <div>This text board serves as a practice project.
                    <br /> We apologize for any inconvenience the features may cause.
                </div>
            </div>
            <div className='flex justify-end'>
                <button type="button">
                      <a href='/ORNGSpecial' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                        Start Free Trial Now
                      </a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login