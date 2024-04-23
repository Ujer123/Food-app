import React from 'react'
import playStore from '../assest/play_store.avif'
import appStore from '../assest/app_store.avif'


export default function Footer() {
  return (
<>



    <section className='play-app'>
        <div className='container pt-3'>
            <div className='row'>
                <div className='col-lg-6 ps-5'>
                    <h3 className='fw-bolder pb-2'>For better experience,download the Swiggy app now</h3>
                </div>
                <div className='col-lg-6 ps-5'>
                    <img src={playStore} className='play-store' alt='play'/>
                    <img src={appStore} className='play-store ps-3' alt='app'/>
                </div>
            </div>
        </div>

    </section>


    <section className='foot-all'>

    <div className='container pt-5 pb-5' >
        <div className='row'>
<div className='col-lg-3'>

      <h5 className='fw-bold'>Swiggy</h5>
      <p>&copy; Copyright All Rights Reserved</p>
</div>
<div className='col-lg-3 list-company col-6'>

      <h5 className='fw-bold'>Company</h5>
      <li>About</li>
      <li>Careers</li>
      <li>Team</li>
      <li>Swiggy One</li>
      <li>Swiggy Instamart</li>
      <li>Swiggy Genie</li>
</div>

<div className='col-lg-3 list-company col-6'>

      <h5 className='fw-bold'>Contact us</h5>
      <li>Help & Support</li>
      <li>Partner with us</li>
      <li>Ride with us</li>
      
      <h5 className='fw-bold pt-5 '>Legal</h5>
      <li>Term & Conditions</li>
      <li>Cookie Policy</li>
      <li>Privacy Policy</li>
</div>
<div className='col-lg-3 list-company'>

      <h5 className='fw-bold'>We deliver to:</h5>
      <li>Bangalore</li>
      <li>Gurgaon</li>
      <li>Hyderabad</li>
      <li>Delhi</li>
      <li>Mumbai</li>
      <li>Pune</li>
</div>
        </div>
    </div>
    </section>
</>
  )
}
