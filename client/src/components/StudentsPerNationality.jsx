import React, { useState } from "react";
import { NavBar } from "./NavBar";
import { FilteredStudentsList } from "./FilteredStudentsList";

export const StudentsPerNationality = (props) => {
  const [selectedNat, setSelectedNat] = useState("");
   
  return (
    <>
      <NavBar />
        <h1 className="text-3xl font-bold text-center mt-10">Select a Nationality</h1>
      <div className="flex justify-center flex-col gap-2 w-72 mt-10">
        <select
          label="Nationality"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            // setNationality(e.target.value);
            setSelectedNat(e.target.value);
          }}
        >
          {props.nationality.sort((a, b) => {
            const natA = a.nationality.charAt(0).toUpperCase() + a.nationality.slice(1)
            const natB = b.nationality.charAt(0).toUpperCase() + b.nationality.slice(1)
            return natA.localeCompare(natB)
          }).reduce((acc, cur) => {
            const x = acc.find(item => item.nationality === cur.nationality)
            if(!x) {
              return acc.concat([cur])
            } else {
              return acc
            }
          }, []).map((nat, i) => (
            <option key={i} value={nat.nationality}>
              {nat.nationality}
            </option>
          ))}
        </select>
        <FilteredStudentsList filter={selectedNat} nationality={props.nationality} />
      </div>
    </>
  );
};
