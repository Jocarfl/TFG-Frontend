import React,{useEffect,useState} from "react";
import AuthService from "services/auth.service";
import UserService from "services/user.service";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Navbar() {

  const [info, setInfo] = useState(false);
  const [badgeLength, setBadgeLength] = useState(0);
  const user = AuthService.getCurrentUser();


  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-1 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href=""
            onClick={(e) => e.preventDefault()}
          >
            {user.user_name}
          </a>



        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
