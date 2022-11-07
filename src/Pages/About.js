import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
  return (
    <div>
        <h1>About Us</h1>
        <p>We are Since on 1980</p>
        <Link to = '/' className='btn'>Back Home</Link>
    </div>
    
  )
}
