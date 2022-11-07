import React from 'react'
import {Link} from 'react-router-dom'

export default function Contacts() {
  return (
    <div>
        <h1>Contact Us</h1>
        <p><li>
          Tel-0412255888</li>
          <li>
            Address- Akuressa rd, Godagama, Matara</li></p>
            <Link to = '/' className='btn'>Back Home</Link>
        
    </div>
  )
}
