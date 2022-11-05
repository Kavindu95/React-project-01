import React from 'react'
import Content from '../components/Content'
import Topicbox from '../components/Topicbox'


export default function Home() {
  return (
    <div>
        <h1>Homepage</h1>
        <Topicbox country='sri lanka' />
        <Topicbox country='maledives' />
        <Topicbox country='austrailia' />
        <Content/> 
        
        
    </div>

  )
}
