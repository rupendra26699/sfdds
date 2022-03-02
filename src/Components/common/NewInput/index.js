import React, { Fragment, useState } from "react";

import clsx from "clsx";

const Input = React.forwardRef(({ type, onChange, onBlur, name, errors, variant = "thin", disabled = false }, ref) => {
  return (
    <Fragment>
      <input
        type={type}
        name={name}
        // className={`form-input${errorMsg || submitError ? " error" : ""}${formData[name].disabled ? " disabled" : ""}`}
        className={
          clsx({
            "w-[96.5%] my-[10px] mx-0 pt-[9px] pb-[9px] pl-[14px] bg-white border border-inputComponentBorderColor rounded-[4px] text-[14px] leading-[17px]  text-inputFieldText": true,
            "border-inputFieldErrorBorderColor": !!errors[name],
            "bg-inputDisabledBackgroundColor": disabled,
            "py-[14px]": variant === "thick",
            "py-[9px]": variant === "thin"
          })
        }

        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
      {(errors[name]) && (
        <p className="text-left m-0 text-[14px] leading-[17px] text-inputFieldErrorMessageColor w-[96.5%]">{errors[name]?.message}</p>
      )}
    </Fragment>
  );
})

export default Input;
