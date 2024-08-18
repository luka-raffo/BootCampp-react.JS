import React from 'react';
import './App.css';


const Header = (prompt) =>  {
  return <h1>{prompt.course}</h1>

}

const Content = (prompt) => {
  return <p> {prompt.part1} {prompt.exercises1}<br/>
  {prompt.part2} {prompt.exercises2}<br/>
  {prompt.part3} {prompt.exercises3}
  </p> 

}

const Total =(prompt) =>{
  return <p>Number of exercises {prompt.suma}</p>
}

const OldApp = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 13
  const suma = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <Total suma={suma} />
    </div>
  )
}

export default OldApp