import React, { useState, useEffect } from "react";
import axios from "axios";
import Body from './Body.js';

const baseURL = "http://localhost:7000/doctorData/";

function BodyScreen() {
  const [previous, setNew] = React.useState([{}]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setNew(response.data);
    });
  }, []);

  if (!previous) return null;

  return (
    <div>
      
      {previous.map((pre) => (
        <Body key={pre.id} pre={pre}></Body>
      ))}
    </div>
  );
}
export default BodyScreen;
