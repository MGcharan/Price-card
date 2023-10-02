// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Price.css"


function Price() {
  return(

  <>             
<section className="pricing mt-0 py-5">
  <div className="container">
    <div className="row">
     
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0 ">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Basic</h5>
            <h6 className="card-price text-center">$99<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li "><i className=" fa-regular fa-circle-check " ></i></span>Single User</li>
              <li><span className="fa-li"><i className="fa-regular fa-circle-check"></i></span>5GB Storage</li>
              <li><span className="fa-li"><i className="fa-regular fa-circle-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fa-regular fa-circle-check"></i></span>Community Access</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain
              </li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Subscribe</a>
            </div>
          </div>
        </div>
      </div>
  
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Professional</h5>
            <h6 className="card-price text-center">$299<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa-regular fa-circle-check"></i></span>Single User</li>
              <li><span className="fa-li"><i className="fa-regular fa-circle-check"></i></span>50GB Storage</li>
              <li><span className="fa-li"><i className="fa-regular fa-circle-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fa-regular fa-circle-check"></i></span>Community Access</li>
              <li><span className="fa-li"><i className="fa-regular fa-circle-check"></i></span>Unlimited
                Private Projects</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain
              </li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Subscribe</a>
            </div>
          </div>
        </div>
      </div>
  
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Master</h5>
            <h6 className="card-price text-center">$499<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa-regular fa-circle-check"></i></span><strong>Unlimited Users</strong>
              </li>
              <li><span className="fa-li"><i className="fa-regular fa-circle-check"></i></span>150GB Storage</li>
              <li><span className="fa-li"><i className="fa-regular fa-circle-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fa-regular fa-circle-check"></i></span>Community Access</li>
              <li><span className="fa-li"><i className="fa-regular fa-circle-check"></i></span>Unlimited Private Projects</li>
              <li><span className="fa-li"><i className="fa-regular fa-circle-check"></i></span>Dedicated Phone Support</li>
              <li><span className="fa-li"><i className="fa-regular fa-circle-check"></i></span><strong>Unlimited</strong> Free
                Subdomains</li>
              <li><span className="fa-li"><i className="fa-regular fa-circle-check"></i></span>Monthly Status Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Subscribe</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>             
</>
)}

export default Price;