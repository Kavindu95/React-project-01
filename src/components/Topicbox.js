import React from 'react'
import './Topicbox.css'

export default function Topicbox() {
  const topic= '#Visit Sri Lanka'
  const vision= '#Sri Lanka Is A Beautiful Country'
  return (
    <div>
        <div className='Topicbox'>
            <span className='text'>{topic} {vision}
            </span>
        </div>
    </div>
  )
}
