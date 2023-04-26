import React, { useState } from "react";
import "./NameInput.css";
const NameInput = () => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmitClick = () => {
    setSubmittedName(name);
    setName("");
  };

  return (
    <div className="name-input">
      <h2>Hi, my name is {submittedName !== "" ? submittedName : "****"}</h2>
      <div className="input-container">
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
        <button onClick={handleSubmitClick}>Submit</button>
      </div>
    </div>
  );
};

export default NameInput;
