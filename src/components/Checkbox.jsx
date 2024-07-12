import React from "react";

export default function Checkbox({ id, name, checked, onChange, optionText }) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <label htmlFor={id} className="ml-3 text-sm text-gray-600">
        {optionText}
      </label>
    </div>
  );
}
