import './App.css'
import { HiBars3CenterLeft } from "react-icons/hi2";

function App() {
 

  return (
    <>
     <button className="button_nav" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
     <HiBars3CenterLeft className='Navbar_bar' />
</button>

<div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
      I will not close if you click outside of me.
    </div>
  </div>
</div>
      
    </>
  )
}

export default App
