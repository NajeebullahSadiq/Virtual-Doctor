import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
const date = new Date();
const currentYear = date.getFullYear();
function Footer()
{
    return (
      <div class="footer">
        <footer className="bg-dark text-center text-lg-start">
          {/* <!-- Grid container --> */}
          <div className="container p-4">
            {/* <!--Grid row--> */}
            <div className="row">
              {/*    <!--Grid column--> */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                {/*   <!--<h5 className="text-uppercase text-light text-bold">QuickBuy</h5>-->  */}
                <img
                  src="/logo/logo.png"
                  alt="logo"
                  className="logoForFooter"
                />
                <p className="text">
                  Confirmation of your appointment with a specific
                  doctor/physician, as per his/her availability, shall be sent
                  to you via SMS and/or email. Connect Doctor reserves the right
                  to reschedule or cancel an appointment without any prior
                  notice{" "}
                </p>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase text-light text-bold">
                  Other Links
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/AboutPage" className="text">
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link to="/AboutPage" className="text">
                      Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/AboutPage" className="text">
                      Connect with Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/AboutPage" className="text">
                      Our Team
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase text-light text-bold">Help</h5>
                <p className="text">
                  In case of any help, contact us on our email or just connect
                  with us on any social media. We will be there to help you. Our
                  services are available 24/7.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase text-light text-bold">
                  Connect With Us
                </h5>
                <ul className="list-unstyled icons mb-0 ">
                  <li>
                    <Link
                      to="/mailto: nasratullahmirzai@gmail.com"
                      target="_blank"
                      className="far fa-envelope fa-2x"
                    ></Link>
                  </li>
                  <li>9074748757</li>
                  <li>nasratullahmirzai@gmail.com</li>
                </ul>
              </div>
            </div>
            {/*  <!--Grid row--> */}
          </div>

          {/* <!-- Copyright --> */}
        </footer>
      </div>
    );
}
export default Footer;