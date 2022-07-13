import React, { createContext } from "react";

const LinkContext = createContext({
  linkArray: [],
  addLinkHandler: () => {},
});

export const LinksContextProvider = (props) => {
  const linkArray = [2, 2, 2];

  const addLinkHandler = (receivedLink) => {
    linkArray.push(receivedLink);
  };
  return (
    <LinkContext.Provider value={{ linkArray, addLinkHandler }}>
      {props.children}
    </LinkContext.Provider>
  );
};

export default LinkContext;
