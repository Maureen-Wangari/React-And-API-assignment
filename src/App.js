import About from "./About";
import Login from "./login";
import Users from "./Users";
import { useState } from "react";
import Modal from "./loginModal/modal";

export function Introduction(){
  return <h2>What is React?</h2>;

} 

function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [modalIsOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  const handleLoginSuccess = ()=>{
    setIsLoggedIn(true)
    setOpen(false);
  };

  return(
    <div>
    <div>
    <div>
      <h1>Introduction to ReactJs</h1>
      <Introduction/>
      <About/>
    </div>
    style={{
      textAlign: "center",
      display:"block",
      padding : 30,
      margin: "auto"
    }} 
    </div>
      {!isLoggedIn ?(
        <>
      <h1 style={{color:"rgb(59,123,59)"}}>Hello</h1>
      <h4>view user details</h4>
      <button type="button" onClick={handleOpen}>Login</button>
      <Modal isOpen ={open} onClose= {handleClose}>
      <>
      <h1>Sign in Form</h1>
      <Login onLoginSuccess={handleLoginSuccess}/>
      </>
      </Modal>
      </>
      ):
      (<Users/>)}
    </div>)}
  

export default App;