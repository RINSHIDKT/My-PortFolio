import './App.css'
import { HiBars3CenterLeft } from "react-icons/hi2";

function App() {
 

  return (
    <>
  <div className="nav-banner-section">
  <div className="navigation-bar">
      {/* ////////////////////OFCANVAS///////////////// */}

      <div className="ofcanvas-main"> <button className="button_nav" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
     <HiBars3CenterLeft className='Navbar_bar' />
</button>

<div className="offcanvas offcanvas-start" data-bs-backdrop="static" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div className="offcanvas-header">
    {/* <h5 className="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5> */}
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
    <div className='nav-div'> <a href="" className="navlinks">Home</a></div>
    <div className='nav-div'><a href="" className="navlinks">About</a></div>
    <div className='nav-div'> <a href="" className="navlinks">Projects</a></div>
    <div className='nav-div'> <a href="" className="navlinks">Contact</a></div>
    </div>
  </div>
</div>
</div>

{/* ////////////////OFFCANVAS-END///////////// */}

{/* /////////////////NAVBAR////////////// */}
<div className="navbar-main">
    <div className="navbar">
        <div className="navitems">
          <div className="navlink"><a href="">HOME</a></div>
          <div className="navlink"><a href="">ABOUT</a></div>
          <div className="navlink"><a href="">PROJECTS</a></div>
          <div className="navlink"><a href="">CONTACT</a></div>
        </div>
    </div>
</div>
{/* /////////////////NAVBAR-END////////////// */}
  </div>

  {/* /////////////NAME-BANNER//////////////// */}
      <div className="name-banner-main">
        <div className="name-banner-left">
          <div className="content">
            <h1>MOHAMMED SHAMIL</h1>
          </div>
        </div>
        <div className="name-banner-right"></div>
      </div>
   {/* /////////////NAME-BANNER-END//////////////// */}
      
  </div>
    </>
  )
}

export default App
