
// import './App.css'
import React from "react";
import ReactDOM from 'react-dom';


const todoTitle = "call Family";
const todoDecs = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit deserunt, minima praesentium distinctio error quae!";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

// const headingStyle = {
//   backgroundColor:"purple",
//   color: "#fff",
//   textAlign: "center",
//   padding:'15px'
// }
function App() {

  function Card(){
    return <div className="card">
      <h3 className="cardTitle">{todoTitle}</h3>
      <p className="cardDesc">{todoDecs}</p>
      <p className="cardFooter"> {dateName + "/" + monthName + "/" + currentYear} </p>
      </div>
  }

  return (
    <>
   
      <h1 className='headingStyle'>Todo App</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  )
}

export default App
