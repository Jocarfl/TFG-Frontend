import React from "react";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-lightBlue-600"
            : "relative") + " pb-6"
        }
      >
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-blueGray-600" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className=" justify-center">
              <div className="text-sm text-blueGray-100 font-semibold py-1 text-center md:text-left">
                Copyright © {"2022"}{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
