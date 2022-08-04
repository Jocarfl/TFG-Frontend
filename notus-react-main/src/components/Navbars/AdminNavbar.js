import React,{useEffect,useState} from "react";
import AuthService from "services/auth.service";
import UserService from "services/user.service";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Navbar() {

  const [info, setInfo] = useState(false);
  const [badgeLength, setBadgeLength] = useState(0);
  const userID = AuthService.getCurrentUser().id;

  useEffect(()=>{UserService.getInfoGamificacionPorId(userID).then(data => {
      setInfo(data);
      setBadgeLength(data.badges.length);
  }).catch(err => console.log(err));},)

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
            Josep Carreres
          </a>



        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
