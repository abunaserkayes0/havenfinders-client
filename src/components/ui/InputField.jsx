import React, { forwardRef } from "react";

const InputField = forwardRef(
  ({ labelName, inputType, placeholder, inputName, ...rest }, ref) => {
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
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);
export default InputField;
