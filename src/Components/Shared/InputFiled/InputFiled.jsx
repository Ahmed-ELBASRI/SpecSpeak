import React from "react";
import "./inputFiled.css";
// eslint-disable-next-line react/prop-types
const InputFiled = ({ label, type, name, placeholder, required, action }) => {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input
        type={type}
        id=""
        className=" form-control requiredField input-label"
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={(e) => {action(e)}}
      />
    </div>
  );
};

export default InputFiled;
