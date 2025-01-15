import React, { forwardRef } from "react";
import useAuth from "../../hooks/useAuth";

const InputField = forwardRef(
  ({ labelName, inputType, placeholder, inputName, ...rest }, ref) => {
    const { color } = useAuth();

    return (
      <div className="form-control">
        <label className="label">
          <span className={`label-text ${color && "text-white"}`}>
            {labelName}
          </span>
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
