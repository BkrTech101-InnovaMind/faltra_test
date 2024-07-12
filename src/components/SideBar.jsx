import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/20/solid";
import SearchFeild from "./SearchFeild";
import Checkbox from "./Checkbox";
import useProcessedData from "@/services/useProcesseData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SideBar({ onFilterChange }) {
  const { processedData } = useProcessedData();
  const [selectedFilters, setSelectedFilters] = useState({
    bonus: ["all"],
    industry: ["all"],
    location: ["all"],
  });

  const handleFilterChange = (filterId, value) => {
    setSelectedFilters((prevFilters) => {
      let newFilters = { ...prevFilters };

      if (value === "all") {
        newFilters[filterId] = ["all"];
      } else {
        const filterIndex = newFilters[filterId].indexOf(value);
        if (filterIndex === -1) {
          newFilters[filterId] = newFilters[filterId].filter(
            (v) => v !== "all"
          );
          newFilters[filterId].push(value);
        } else {
          newFilters[filterId].splice(filterIndex, 1);
          if (newFilters[filterId].length === 0) {
            newFilters[filterId] = ["all"];
          }
        }
      }
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const filters = [
    {
      id: "bonus",
      name: "Bonus",
      options: [
        { value: "all", label: "All" },
        { value: "With Bonus", label: "With Bonus" },
        { value: "Without Bonus", label: "Without Bonus" },
      ],
    },
    {
      id: "industry",
      name: "Industry",
      options: [
        { value: "all", label: "All" },
        ...processedData.industry.map((i) => ({ value: i, label: i })),
      ],
    },
    {
      id: "location",
      name: "Location",
      options: [
        { value: "all", label: "All" },
        ...processedData.location.map((l) => ({ value: l, label: l })),
      ],
    },
  ];

  return (
    <div className="bg-white">
      <div>
        <main className="max-w-2xl lg:max-w-7xl">
          <aside>
            <div className="hidden md:block">
              <form
                className="space-y-5 divide-y divide-gray-200"
                onSubmit={(e) => e.preventDefault()}
              >
                <SearchFeild />
                {filters.map((section, sectionIdx) => (
                  <div
                    key={section.name}
                    className={sectionIdx === 0 ? null : "pt-5"}
                  >
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-900">
                        {section.name}
                      </legend>
                      <div className="space-y-3 pt-6">
                        {section.options.map((option) => (
                          <Checkbox
                            key={option.value}
                            id={`${section.id}-${option.value}`}
                            name={`${section.id}`}
                            checked={selectedFilters[section.id].includes(
                              option.value
                            )}
                            onChange={() =>
                              handleFilterChange(section.id, option.value)
                            }
                            optionText={option.label}
                          />
                        ))}
                      </div>
                    </fieldset>
                  </div>
                ))}
              </form>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
