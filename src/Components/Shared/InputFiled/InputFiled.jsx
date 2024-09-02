import React from "react";
import "./inputFiled.css";
const InputFiled = ({ label, type, name, placeholder, required }) => {
  return (
    <div className="form-group">
      {label && <label for="">{label}</label>}
      <input
        type={type}
        id="contact-name"
        className=" form-control requiredField input-label"
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputFiled;
