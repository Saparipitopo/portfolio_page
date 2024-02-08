import { useState, createContext } from "react";

export const ContactMeContext = createContext();

export function ContactMeContextProvider(props) {
  const [trigger, setTrigger] = useState(false);

  function HandleTrigger() {
    setTrigger(trigger ? false : true);
  }

  return (
    <ContactMeContext.Provider value={{ trigger, HandleTrigger }}>
      {props.children}
    </ContactMeContext.Provider>
  );
}
