import React from "react";

export default function SelectInput({
  label,
  name,
  onChange,
  value,
  options,
}) {
  return (
    <>
      <div className="mb-6">
        <label htmlFor={name} className="block mb-2 text-md font-medium">
          {label}
        </label>
        <select
          id={name}
          name={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
