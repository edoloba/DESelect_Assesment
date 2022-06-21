import { Button } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";

export const FilteredStudentsList = (props) => {
  const [alphaSorted, setAlphaSorted] = useState(props.nationality);

  useEffect(() => {
    setAlphaSorted(props.nationality)
  }, [props.nationality])
  const filteredStudent = props.nationality.filter((e) => {
    const newStudentArray = e.nationality === props.filter;
    return newStudentArray;
  });

  const handleAlphaSorted = () => {
      const sortedList = [...alphaSorted].sort((a, b) => {
        return a.firstName > b.firstName ? 1 : -1
      })
    setAlphaSorted(sortedList)
    console.log(sortedList);
    
  };
  return (
    <>
      <div className="flex justify-center flex-col gap-2 w-72 mt-10">
        {
          filteredStudent.map((stu, i) => (
            <p key={i} className="text-center">
              {stu.firstName} {stu.lastName} ({stu.age})
            </p>
          ))}
        <Button onClick={handleAlphaSorted}>
     Sort Alphabetically</Button>
      </div>
    </>
  );
};
