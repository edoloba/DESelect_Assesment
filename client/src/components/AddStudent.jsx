import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { NavBar } from "./NavBar";

export const AddStudent = (props) => {
  const [input, setInput] = useState({
    id: "",
    firstName: "",
    lastName: "",
    age: "",
    nationality: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInp) => {
      return {
        ...prevInp,
        [name]: value,
      };
    });
  };

  const handleClick = async (e) => {
    // e.preventDefault();
    await fetch("http://localhost:3001/init", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((res) => {
        res.json();
      })
      .then(() => {
        setInput({
          id: "",
          firstName: "",
          lastName: "",
          age: "",
          nationality: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavBar />
      <h1 className="text-3xl font-bold text-center mt-10">Add Student</h1>
      <form className="flex justify-center flex-col gap-4 w-72 mt-10">
        <Input
          label="id"
          type="number"
          onChange={handleChange}
          name="id"
          variant="outlined"
          value={input.id}
          required
        />

        <Input
          label="First Name"
          type="text"
          onChange={handleChange}
          name="firstName"
          variant="outlined"
          value={input.firstName}
          required
        />

        <Input
          label="Last Name"
          type="text"
          onChange={handleChange}
          name="lastName"
          variant="outlined"
          value={input.lastName}
          required
        />

        <Input
          label="Age"
          type="number"
          onChange={handleChange}
          name="age"
          variant="outlined"
          value={input.age}
          required
        />

        <Input
          label="Nationality"
          type="text"
          onChange={handleChange}
          name="nationality"
          variant="outlined"
          value={input.nationality}
          required
        />

        <Button onClick={() => handleClick()}>Add Student</Button>
      </form>
    </>
  );
};
