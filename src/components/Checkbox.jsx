import React from "react";

export default function Checkbox({ section, option, optionIdx }) {
  return (
    <div className="flex items-center">
      <input
        id={`${section.id}-${optionIdx}`}
        name={`${section.id}[]`}
        defaultValue={option.value}
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <label
        htmlFor={`${section.id}-${optionIdx}`}
        className="ml-3 text-sm text-gray-600"
      >
        {option.label}
      </label>
    </div>
  );
}
