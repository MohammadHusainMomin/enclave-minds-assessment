import { createContext, useState } from "react";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [formPayload, setFormPayload] = useState({
    profile: {},
    experience: {}
  });

  return (
    <RegisterContext.Provider value={{ formPayload, setFormPayload }}>
      {children}
    </RegisterContext.Provider>
  );
};
