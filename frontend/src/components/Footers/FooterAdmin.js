import React from "react";

export default function FooterAdmin() {

  const mystyle={
    position: "relative",
    left: 0,
    bottom: 0,
  }
  return (
    <>
      <footer className="block py-4" style={mystyle}>
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {"2022"}{" "}

              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                           
                <li>
                  <a
                    className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                  >            
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}