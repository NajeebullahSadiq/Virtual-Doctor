import React, {useState, useEffect}from "react";
import axios from "axios";
import './Body.css';

const baseURL = "http://localhost:5000/doctorData/";


function Body()
{
   const [previous, setNew] = React.useState([{}]);

  React.useEffect(() => {
  axios.get(baseURL)
    .then((response) => {
      setNew(response.data);
    });
  }, []);

   if (!previous) return null;

    return (
      <div>
        {/* <img src="slides/pic10.jpg" className="bodyImage"></img> */}
        {previous.map((pre) => (
          <div class="card">
            <a href={`/DoctorDetails/${pre._id}`}>
              <img
                src={pre.image}
                class="card-img-top"
                alt="doctor photo"
                key={pre.id}
              ></img>
            </a>
            <div class="card-body">
              <h1 class="card-title" key={pre.id}>
                {pre.name}
              </h1>
              <h3 class="card-text" key={pre.id}>
                {pre.specialization}
              </h3>
              <p class="card-text">
                <small class="text-muted" key={pre.id}>
                  {pre.experience}
                </small>
              </p>
            </div>

            {/* <DoctorDetails pre={pre.id} pre={pre}></DoctorDetails> */}
          </div>
        ))}
      </div>
    );
}
export default Body;



