import React from "react";

function FontSetting({
  fontFamily,
  setFontFamily,
  fontSize,
  setFontSize,
  fontColor,
  setFontColor,
  backgroundColor,
  setBackgroundColor,
}) {
  return (
    <div>
      <div className="ml-3 rounded-md bg-[#F0F0F0] p-4 mr-3">
        <div className="head font-bold text-2xl">Font Setting</div>
        <hr />
        <div className="operate">
          {/* Font */}
          <div className="scrollDirection bg-white flex justify-between p-2 rounded-md mt-2">
            <div className="left flex justify-center items-center gap-2 font-bold">
              <svg
                className="bg-[#529EE4] p-1 rounded-xl text-white w-9"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5 4H19V8H17.5C17 6 17 5 15 5H10V12H13C14 12 15 11.5 15 10H16V15H15C15 13.5 14 13 13 13H10V17.5C10 20 13.5 20 13.5 20V21H5V20C7 19.5 7 18.5 7 17.5V7.5C7 6.5 7 5.5 5 5V4Z"></path>
              </svg>
              <div>Font</div>
            </div>
            <div className="right flex justify-center items-center gap-2">
              <select
                className="fontOption"
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
              >
                <option value="sans-serif">Sans-Serif</option>
                <option value="serif">Serif</option>
                <option value="monospace">Monospace</option>
                <option value="Arial">Arial</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Verdana">Verdana</option>
                {/* Add more font options as needed */}

                <option value="sans-serif">Sans-Serif</option>
                <option value="serif">Serif</option>
                <option value="monospace">Monospace</option>
                <option value="Arial">Arial</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Verdana">Verdana</option>
                {/* Khmer Fonts */}
                <option value="Khmer UI">Khmer UI</option>
                <option value="Khmer Sangam MN">Khmer Sangam MN</option>
                <option value="Hanuman">Hanuman</option>
                <option value="Battambang">Battambang</option>
                <option value="Nokora">Nokora</option>
                <option value="Moul">Moul</option>
                <option value="Metal">Metal</option>
                <option value="Content">Content</option>
              </select>
            </div>
          </div>
          {/* Font Size */}
          <div className="scrollDirection bg-white flex justify-between p-2 rounded-md mt-2">
            <div className="left flex justify-center items-center gap-2 font-bold">
              <svg
                className="bg-[#529EE4] p-1 rounded-xl text-white w-9"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.246 15H4.75416L2.75416 20H0.600098L7.0001 4H9.0001L15.4001 20H13.246L11.246 15ZM10.446 13L8.0001 6.88516L5.55416 13H10.446ZM21.0001 12.5351V12H23.0001V20H21.0001V19.4649C20.4118 19.8052 19.7287 20 19.0001 20C16.791 20 15.0001 18.2091 15.0001 16C15.0001 13.7909 16.791 12 19.0001 12C19.7287 12 20.4118 12.1948 21.0001 12.5351ZM19.0001 18C20.1047 18 21.0001 17.1046 21.0001 16C21.0001 14.8954 20.1047 14 19.0001 14C17.8955 14 17.0001 14.8954 17.0001 16C17.0001 17.1046 17.8955 18 19.0001 18Z"></path>
              </svg>
              <div>Font Size</div>
            </div>
            <div className="right flex justify-center items-center gap-2">
              <button
                className="righ btn left btn-light"
                onClick={() => setFontSize((size) => size - 1)}
              >
                <svg
                  className="w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5 11V13H19V11H5Z"></path>
                </svg>
              </button>
              <button
                className="righ btn left btn-light"
                onClick={() => setFontSize((size) => size + 1)}
              >
                <svg
                  className="w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Font Color */}
          <div className="scrollDirection bg-white flex justify-between p-2 rounded-md mt-2">
            <div className="left flex justify-center items-center gap-2 font-bold">
              <svg
                className="bg-[#529EE4] p-1 rounded-xl text-white w-9"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M15.2459 14H8.75407L7.15407 18H5L11 3H13L19 18H16.8459L15.2459 14ZM14.4459 12L12 5.88516L9.55407 12H14.4459ZM3 20H21V22H3V20Z"></path>
              </svg>
              <div>Font Color</div>
            </div>
            <div className="right flex justify-center items-center gap-2">
              <input
                className="Color w-[153px] rounded-xl bg-re"
                type="color"
                value={fontColor}
                onChange={(e) => setFontColor(e.target.value)}
              />
            </div>
          </div>
          {/* Background Color */}
          <div className="scrollDirection bg-white flex justify-between p-2 rounded-md mt-2">
            <div className="left flex justify-center items-center gap-2 font-bold">
              <svg
                className="bg-[#529EE4] p-1 rounded-xl text-white w-9"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.0082 3C21.556 3 22 3.44495 22 3.9934V13H20V5H4V18.999L14 9L17 12V14.829L14 11.8284L6.827 19H14V21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7Z"></path>
              </svg>
              <div>Background Color</div>
            </div>
            <div className="right flex justify-center items-center gap-2 rounded-2xls">
              <input
                className="BG w-[153px] rounded-xl bg-re"
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FontSetting;
