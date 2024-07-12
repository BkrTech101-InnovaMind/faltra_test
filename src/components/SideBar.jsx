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
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [showMoreLocations, setShowMoreLocations] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    bonus: "all",
    industry: "all",
    location: "all",
  });

  const handleFilterChange = (filterId, value) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = {
        ...prevFilters,
        [filterId]: value,
      };
      if (value === "all") {
        for (let key in newFilters) {
          if (key !== filterId) newFilters[key] = "all";
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
        {/* Mobile filter dialog */}
        <Transition show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4">
                    <SearchFeild />
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 pb-4 pt-4"
                      >
                        {({ open }) => (
                          <fieldset>
                            <legend className="w-full px-2">
                              <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-5 w-5 transform"
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </legend>
                            <Disclosure.Panel className="px-4 pb-2 pt-4">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <Checkbox
                                      key={option.value}
                                      id={`${section.id}-${option.value}-mobile`}
                                      name={`${section.id}`}
                                      checked={
                                        selectedFilters[section.id] ===
                                        option.value
                                      }
                                      onChange={() =>
                                        handleFilterChange(
                                          section.id,
                                          option.value
                                        )
                                      }
                                      optionText={option.label}
                                    />
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </fieldset>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>

        <main className="max-w-2xl lg:max-w-7xl">
          <aside>
            <h2 className="sr-only">Filters</h2>
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="text-sm font-medium text-gray-700">Filters</span>
              <PlusIcon
                className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
            </button>

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
                            checked={
                              selectedFilters[section.id] === option.value
                            }
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
