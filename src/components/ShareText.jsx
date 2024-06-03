import { createContext, useState } from "react";

export const ShareText = createContext({});

// const ShareTextContext = ({ children }) => {
//   const [text, setText] = useState("");
//   return (
//     <ShareText.Provider value={{ text, setText }}>
//       {children}
//     </ShareText.Provider>
//   );
// };
