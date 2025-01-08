import React from "react";

export default function InputField({
  labelName,
  inputType,
  placeholder,
  inputName,
}) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{labelName}</span>
      </label>
      <input
        type={inputType}
        placeholder={placeholder}
        name={inputName}
        className="input input-bordered"
        required
      />
    </div>
  );
}
