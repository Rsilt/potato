import React, { useState } from "react"
import "./App.css"
import Toggle from "./Toggle"
import Show from "./Show"
import Maths from "./Maths"
import MyForm from "./MyForm"
import PropDrilling from "./PropDrilling"
import Context from "./Context"
import Fetching from "./Fetching"
import Menuappbar from "./Menuappbar"
import Typography from "@mui/material/Typography"
import Userinfo from "./userinfo" // Import Userinfo component

function App() {
  const [show, setShow] = useState(true)
  const [isPopupOpen, setIsPopupOpen] = useState(false) // Add state for popup

  const toggleShow = () => setShow(previousShow => !previousShow)

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <div className="Container">
      <div className="Menu">
        <Menuappbar openPopup={openPopup} /> {/* Pass openPopup function */}
      </div>
      <div className="Stuff">
        <Typography variant="h1">Roland Silt</Typography>
        <Fetching />
        <PropDrilling />
        <Context />
        <MyForm />
        <Maths />
        <Show show={show} />
        <Toggle toggleShow={toggleShow} />
      </div>
      {isPopupOpen && <Userinfo onClose={closePopup} />}{" "}
      {/* Render Userinfo based on isPopupOpen */}
    </div>
  )
}

export default App
