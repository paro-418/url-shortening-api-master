import React, { createContext, useEffect, useState } from "react";

const LinkContext = createContext({
  linkArray: [],
  addLinkHandler: () => {},
  isValidLnk: true,
});

export const LinksContextProvider = (props) => {
  const getData = () => {
    const fetchData = localStorage.getItem("myLinks");
    if (fetchData) {
      return JSON.parse(fetchData);
    } else return [];
  };
  const [linkArray, setLinkArray] = useState(getData());
  const [isValidLnk, setIsValidLnk] = useState(true);

  useEffect(() => {
    localStorage.setItem("myLinks", JSON.stringify(linkArray));
  }, [linkArray]);

  const addLinkHandler = (receivedLink) => {
    setIsValidLnk(true);
    const fetchHandler = async () => {
      const response = await fetch(
        ` https://api.shrtco.de/v2/shorten?url=${receivedLink}`
      );
      const shrtLnk = await response.json();
      if (!response.ok) {
        setIsValidLnk(false);
        throw new Error(response.statusText + ", Not a valid URL!!");
      }
      // if (response.ok) {
      // }
      const storeLink = {
        orglLnk: receivedLink,
        shrtLnk: shrtLnk.result.full_short_link,
      };

      setLinkArray((prevState) => [...prevState, storeLink]);
    };
    try {
      fetchHandler();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LinkContext.Provider value={{ linkArray, addLinkHandler, isValidLnk }}>
      {props.children}
    </LinkContext.Provider>
  );
};

export default LinkContext;
