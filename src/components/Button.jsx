import React from 'react'

const Button = ({name}) => {
  return (
    <div >
        <button className="bg-gray-300 px-3 py-2 rounded-lg m-3 hover:bg-black hover:text-white cursor-pointer">{name}</button>
    </div>
  )
}

export default Button