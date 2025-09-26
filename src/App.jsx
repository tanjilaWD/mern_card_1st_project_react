
// import './App.css'


const todoTitle = "call Family";
const todoDecs = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit deserunt, minima praesentium distinctio error quae! Fugiat labore, voluptate neque natus similique pariatur, suscipit omnis rem animi, porro dolor perferendis dignissimos?";
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


  return (
    <>
    {/* <h1 style ={headingStyle}>Todo App</h1> */}
      <h1 className='headingStyle'>Todo App</h1>
      <div className="card">
      <h3 className="cardTitle">{todoTitle}</h3>
      <p className="cardDesc">{todoDecs}</p>
      <p className="cardFooter"> {dateName + "/" + monthName + "/" + currentYear} </p>
      </div>
    </>
  )
}

export default App
