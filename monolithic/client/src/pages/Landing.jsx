import React, { Fragment } from 'react'
import '../css/landing.css'
const Landing = () => {
    return (
      <div className="mainlanding">
      <div class="top-container">
      <h1>Inventory Management and Invoicing <br/> for your business.</h1>
      <h3 class="top-content">The easiest inventory management software</h3>
      <a href="#" class="first-button">MANAGE INVENTORY FOR FREE</a>
  </div>

   <div class="middle-container">
    <div class="middle-heading">
      <h3 class="middle-h3">Simple as Excel & Impactful as SAP</h3>
      <p class="middle-p">Also, Integrated with Tally to Streamline your Accounting</p>
    </div>
    <div class="logos">
        <img class="logo1" src="https://res.cloudinary.com/dm2qi0xrw/image/upload/v1639787599/Vence%20%28SE%29/l2/logo1_vau7iv.png" alt="img1"/>
        <img class="logo2" src="https://res.cloudinary.com/dm2qi0xrw/image/upload/v1639787599/Vence%20%28SE%29/l2/logo2_prklas.png" alt="img1"/>
        <img class="logo3" src="https://res.cloudinary.com/dm2qi0xrw/image/upload/v1639787599/Vence%20%28SE%29/l2/logo3_pmarjl.png" alt="img1"/>
        <img class="logo4" src="https://res.cloudinary.com/dm2qi0xrw/image/upload/v1639787599/Vence%20%28SE%29/l2/logo4_jaer5c.png" alt="img1"/>
    </div>
    <div class="middle-lower">
      <div class="box1">
        <h4>Free Sign Up</h4>
        <p>The web app is completely free to use, with no charges whatsoever.</p>
      </div>
      <div class="box2">
        <h4>Saves time and hastle</h4>
        <p>Save atleast 4 hours on a daily basis and invest your time in Business Growth & RnD</p>
      </div>
      <div class="box3">
        <h4>Generate bill in one click</h4>
        <p>No more pen paper bills or debt, generate a customer invoice with just one click.</p>
      </div>
      <div class="box4">
        <h4>Implements 100%</h4>
        <p>Extremely easy to understand and operate by users of any age group.</p>
      </div>
    </div>
  </div>  

      <div class="feature1">
        <h2>Why us?</h2>
        <div class="feature1-col">
          <img class="small-business-img" src="https://res.cloudinary.com/dm2qi0xrw/image/upload/v1639774429/Vence%20%28SE%29/l2/20944999_ufbk12.jpg" alt="gd-img"/>
          <h3 class="second-heading">Empowering Small Businesses</h3>
          <p class="second-content">Say goodbye to pen and paper. The Vence web app lets you effortlessly manage your inventory, manage and print invoices.</p>
        </div>
        <div class="feature1-col">
          <img class="free-img" src="https://res.cloudinary.com/dm2qi0xrw/image/upload/v1639777360/Vence%20%28SE%29/l2/218_g1grwf.jpg" alt="WebD-img"/>
          <h3 class="third-heading">Completely Free For Everyone</h3>
          <p class="third-content">Vence is completely free to use. Regardless of what kind of business you own, big or small, this is the one stop web app for you.</p>
        </div>
      </div>
  
      <div class="bottom-container">
        <h2 class="bottom-heading">Still doing your Inventory <br/> Management on Excel?</h2>
        <a class="bottom-button" href=''>START USING FOR FREE</a>
        <div class="footer">
          <p class="rights">© 2021 Team- Zeus</p>
        </div>
    </div>
    </div>
    )
}

export default Landing
