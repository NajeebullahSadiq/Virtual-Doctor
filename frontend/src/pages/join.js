import React, { useState } from "react";
import './join.css'
export default function JoinRoom() {
  const [room, setRoom] = useState(null);

  const onSubmit = () => {
    window.location.assign(`/video/${room}`);
  };

  return (
    <div className="TextInput">

    <h3 className=""> Enter your ID</h3> <br/>
      <input className="input" type="text" placeholder="Enter your ID" onChange={(e) => setRoom(e.target.value)} /><br/>
      <button className="btn btn-primary btnd"onClick={onSubmit}>Start Video and Chat with Doctor </button>
    </div>
  );
}
