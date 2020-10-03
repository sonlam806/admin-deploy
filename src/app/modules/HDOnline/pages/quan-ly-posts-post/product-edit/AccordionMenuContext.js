import React from 'react'

export const AccordionContext = React.createContext({
  openChild: null,
  setOpenChild: () => {},
});

export const useAccordion = () => {
  const [openChild, setOpenChild] = React.useState(0);
  const setCurrentOpenChild = React.useCallback((currentChild) => {
    setOpenChild(currentChild);
  }, []);

  return {
    openChild,
    setCurrentOpenChild,
  };
};