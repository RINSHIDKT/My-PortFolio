import React from 'react'
import './Services.scss'
import { HiOutlineDesktopComputer } from "react-icons/hi";

const Services = () => {
  return (
    <div className='servises-main-div'>
       {/* //////////////SERVICES/////////////// */}
  <div className="services-main">
        <h1 className='service-heading'>My Awesom <span className='srvs-text'>Services.</span></h1>
       <div className="service_main_carrdss">
        <div className="service-main-crd-left">
        <div className="service-card-main">
            <div className="service-card">
            <div className="service-card-left">
            <span><HiOutlineDesktopComputer className='pers_icon' /></span>
            </div>
            <div className="service-card-right">
             <h3> Website Designing</h3>
             <p>4+ Projects </p>
            </div>
            </div>
        </div>
        </div>

        <div className="service-main-crd-right">

        </div>
       </div>
      </div>

  

    </div>
  )
}

export default Services
