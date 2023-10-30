import React from "react";

export default function Input({label,type,name,placeholder,onChange}) {
  return (
    <>
      <div class="mb-6">
        <label
          htmlFor={name}
          class="block mb-2 text-md font-medium"
        >
         {label}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
          placeholder={placeholder}
          onChange={onChange}
          required
        />
      </div>
    </>
  );
}
