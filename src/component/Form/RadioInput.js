import React from "react";

export default function RadioInput({ label, name, value, checked, onChange }) {
  return (
    <>
      <div className="flex items-center mr-4 h-[40px]">
        <input
          className="w-4 h-4 lue-600  focus:ring-blue-500 "
          id={name}
          type="radio"
          value={value}
          name="inline-radio-group"
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor="inline-radio" className="ml-2 text-sm font-medium ">
          {label}
        </label>
      </div>
    </>
  );
}
