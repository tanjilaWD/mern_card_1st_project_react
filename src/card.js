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


  function Card(){
    return <div className="card">
      <h3 className="cardTitle">{todoTitle}</h3>
      <p className="cardDesc">{todoDecs}</p>
      <p className="cardFooter"> {dateName + "/" + monthName + "/" + currentYear} </p>
      </div>
  }