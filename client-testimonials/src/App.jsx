import React from 'react'
import User from './components/TestimonialCard'
import './App.css'

function App() {

  return (
   <div>
   <h1> Testimonial Card </h1>
   <User name = "Sam"  Review_text = "The  Service was fabolous !"></User>
   <User name = "Chris" Review_text="the service was indeed awesome"></User>
  
   </div>
  )
}

export default App;