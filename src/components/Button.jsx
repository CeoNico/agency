import Link from 'next/link'
import React from 'react'

const Button = ({title, href, bg}) => {
  return (
    <button className={`${bg} rounded-xl text-sm p-2 hover:bg-slate-900 hover:text-white transition duration-300`}>
        <Link href={href}>{title}</Link>
    </button>
  )
}

export default Button