import {useParams } from "react-router-dom";
import React from "react";
import "./DoctorDetails.css";
import axios from "axios";

const baseURL = "http://localhost:5000/doctorData/";
export default function App() {
  
  const [previous, setNew] = React.useState([{}]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setNew(response.data);
    });
  }, []);
   const { id } = useParams();
  const data = previous.find((x) => x._id === (id));

  if (!data) return null;

  return (
    <div>
      <div class="container emp-profile">
        <form>
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <img src={data.image} alt={data.image} />
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-head">
                <label for="">Awards</label>
                <h3 className="top-one">{data.awards}</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="profile-work">
                <p>{data.name}</p>
                <p>{data.specialization}</p>
                <br />
                <p>{data.experience} experience</p>
                <br />
                <p> Fee: {data.fee}</p>
                <br />
                <p>{data.clinic_location}</p>
                <br />
              </div>
            </div>
            <div class="col-md-8">
              <div class="tab-content profile-tab" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <p> Description of Doctor</p>
                    </div>
                    <div class="col-md-6">
                      <p>{data.description}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Name</label>
                    </div>
                    <div class="col-md-6">
                      <p>{data.name}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Email</label>
                    </div>
                    <div class="col-md-6">
                      <p>{data.email}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div class="col-md-6">
                      <p>{data.phoneNO}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href={'/ji/'}>
              {" "}
              <button class="btn btn-primary" type="button">
                Start Video Call
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
