import React from "react";
import PropTypes from "prop-types";

export default function CardStats({
  statSubtitle,
  statTitle,
  statDescripiron,
  statIconName,
  statIconColor,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 mt-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
             
                <button className=" background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                  <i className={statIconName}></i>
                </button>
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            <span className="whitespace-nowrap">{statDescripiron}</span>
          </p>
        </div>
      </div>
    </>
  );
}


CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};
