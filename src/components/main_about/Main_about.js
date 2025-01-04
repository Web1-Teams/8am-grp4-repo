
import './mainAbout.css'

const Main_about=()=>{

    return(
        <section className="info-section">
  <div className="containerMain">
    <h2>About Our Clinics</h2>
    <p className='mHead'>A comprehensive group of clinics designed to meet various health needs.</p>
    <div className="row text-center g-4">
      <div className="col-lg-2 col-md-4 col-sm-6 mx-auto">
        <div className="card physical-therapy">
          <div className="card-icon">🩺</div>
          <h5 className="card-title">Physical Therapy</h5>
          <p className="card-text">
            A comprehensive program to restore mobility and treat physical injuries.
          </p>
          
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mx-auto">
        <div className="card mental-health">
          <div className="card-icon">💭</div>
          <h5 className="card-title">Mental Health</h5>
          <p className="card-text">
            Comprehensive psychological support to improve mental and emotional health.
          </p>
         
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mx-auto">
        <div className="card self-care">
          <div className="card-icon">💄</div>
          <h5 className="card-title">Self Care</h5>
          <p className="card-text">
            Services aimed at enhancing self-care and beauty.
          </p>
          
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mx-auto">
        <div className="card nutrition">
          <div className="card-icon">🥗</div>
          <h5 className="card-title">Nutrition</h5>
          <p className="card-text">
            Nutritional guidance to improve diet and overall health.
          </p>
          
        </div>
      </div>
    </div>
  </div>
</section>

    )
}
    
export default Main_about ;