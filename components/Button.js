import React from 'react'

const Button = ({ children, className }) => (
    <button className={`bg-purple-700 p-4 rounded transition shadow hover:shadow-md text-white font-bold ${className || ''}`}>
        {children}
    </button>
)

export default Button