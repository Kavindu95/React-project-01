import React from 'react'
import './Topicbox.css'

export default function Topicbox(props) {
 
  return (
    <div>
        <div className='Topicbox'>
            <span className='text'>Most beautiful country {props.country}</span>
        </div>
    </div>
  )
}
