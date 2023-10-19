import React from "react"
import './Home.css'


const fakeTopics = [
    { id: 1, title: 'Self Improvement' },
    { id: 2, title: 'Politics & Currrent' },
    { id: 3, title: 'International Relations' },
    { id: 4, title: 'Programming and software' },
    { id: 5, title: 'Current Affairs' },
    { id: 6, title: 'Cinema' },
  
  ]
const topics=()=>{
    return (
        <div className="topic-list">
          {fakeTopics.map(topic => (
            <div key={topic.id} className="topic_item">
              {topic.title}
            </div>
          ))}
        </div>
      )

}
export default topics