import React from "react";

function Customization({
  scrollDirection,
  setScrollDirection,
  scrollSpeed,
  setScrollSpeed,
  blink,
  setBlink,
  blinkFrequency,
  setBlinkFrequency,
}) {
  return (
    <div className="ml-3 mr-3 rounded-md bg-[#F0F0F0] p-4">
      <div className="head font-bold text-2xl">Customization</div>
      <hr />
      <div className="operate">
        {/* Scroll Direction */}
        <div className="scrollDirection bg-white flex justify-between p-2 rounded-md mt-2">
          <div className="left flex justify-center items-center gap-2 font-bold">
            <svg
              className="bg-[#529EE4] p-1 rounded-xl text-white w-9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16 16V12L21 17L16 22V18H4V16H16ZM8 2V5.999L20 6V8H8V12L3 7L8 2Z"></path>
            </svg>
            <div>Scroll Directions </div>
          </div>
          <div className="right flex justify-center items-center gap-2">
            <button
              type="button"
              className={`btn ${
                scrollDirection === -1 ? "active" : ""
              } btn-light`}
              onClick={() => setScrollDirection(-1)}
            >
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
              </svg>
            </button>
            <button
              className={`btn ${
                scrollDirection === 0 ? "active" : ""
              } btn-light`}
              onClick={() => setScrollDirection(0)}
            >
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 7V17H17V7H7ZM6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z"></path>
              </svg>
            </button>
            <button
              className={`btn ${
                scrollDirection === 1 ? "active" : ""
              } btn-light`}
              onClick={() => setScrollDirection(1)}
            >
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Scroll Speed */}
        <div className="scrollDirection bg-white flex justify-between p-2 rounded-md mt-2">
          <div className="left flex justify-center items-center gap-2 font-bold">
            <svg
              className="bg-[#529EE4] p-1 rounded-xl text-white w-9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 13C20 15.2091 19.1046 17.2091 17.6569 18.6569L19.0711 20.0711C20.8807 18.2614 22 15.7614 22 13 22 7.47715 17.5228 3 12 3 6.47715 3 2 7.47715 2 13 2 15.7614 3.11929 18.2614 4.92893 20.0711L6.34315 18.6569C4.89543 17.2091 4 15.2091 4 13 4 8.58172 7.58172 5 12 5 16.4183 5 20 8.58172 20 13ZM15.293 8.29297 10.5 12.5 12.5 14.5 16.7072 9.70718 15.293 8.29297Z"></path>
            </svg>
            <div>Scroll Speed</div>
          </div>
          <div className="right flex justify-center items-center gap-2 ">
            <input
              className="w-[153px] Speed"
              type="range"
              min="1"
              max="20"
              value={scrollSpeed}
              onChange={(e) => setScrollSpeed(parseInt(e.target.value))}
            />
          </div>
        </div>
        {/* Blink ON OFF  */}
        <div className="scrollDirection bg-white flex justify-between p-2 rounded-md mt-2">
          <div className="left flex justify-center items-center gap-2 font-bold">
            <svg
              className="bg-[#529EE4] p-1 rounded-xl text-white w-9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9.97308 18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM14 20H10V21H14V20ZM5.75395 14.9992C4.65645 13.5335 4 11.8231 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8231 19.3436 13.5336 18.246 14.9992L18.1875 15.0718L17.8971 15.415C17.784 15.5464 17.0781 16.3066 16.9901 16.414C16.0722 17.4415 15.4544 18.2591 15.224 19H8.77602C8.5456 18.2591 7.92781 17.4415 7.00994 16.414C6.92188 16.3066 6.21597 15.5464 6.10294 15.415L5.8125 15.0718L5.75395 14.9992Z"></path>
            </svg>
            <div>Blink On/Off</div>
          </div>
          <div className="right flex justify-center items-center gap-2">
            <button
              type="button"
              className={`btn ${blink ? "active" : ""} btn-light`}
              onClick={() => setBlink(true)}
            >
              On
            </button>
            <button
              className={`btn ${!blink ? "active" : ""} btn-light`}
              onClick={() => setBlink(false)}
            >
              Off
            </button>
          </div>
        </div>
        {/* Blink Frequency */}
        <div className="scrollDirection bg-white flex justify-between p-2 rounded-md mt-2">
          <div className="left flex justify-center items-center gap-2 font-bold">
            <svg
              className="bg-[#529EE4] p-1 rounded-xl text-white w-9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13 9H15L12 5 9 9H11V13H9L12 17 15 13H13V9ZM4 5H8V3H4C3.44772 3 3 3.44772 3 4V8H5V4C5 3.44772 4.55228 3 4 3ZM3 20V16H5V20C5 20.5523 4.55228 21 4 21H8V19H4C3.44772 19 3 18.5523 3 18ZM20 20H16V21H20C20.5523 21 21 20.5523 21 20V16H19V20C19 20.5523 18.5523 21 18 21ZM19 3H16V5H20C20.5523 5 21 4.55228 21 4V8H19V4C19 3.44772 18.5523 3 18 3Z"></path>
            </svg>
            <div>Blink Frequency</div>
          </div>
          <div className="right flex justify-center items-center gap-2 ">
            <input
              className="w-[153px] Speed"
              type="range"
              min="1"
              max="20"
              step="1"
              value={blinkFrequency}
              onChange={(e) => setBlinkFrequency(parseInt(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customization;
