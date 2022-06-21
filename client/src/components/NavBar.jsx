import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Typography} from "@material-tailwind/react";

export const NavBar = () => {
  return (
    <Navbar className="max-w-screen-xl mx-auto mt-2" color="blue">
      <ul className="flex items-center justify-center gap-6">
        <Typography as="li" variant="small" className="p-1 font-normal flex-items-center">
          <Link to="/home">
            Students
          </Link>
        </Typography>
        <Typography as="li" variant="small" className="p-1 font-normal flex-items-center">
          <Link to="/new">
            Add Student
          </Link>
        </Typography>
      </ul>
    </Navbar>
  );
};
