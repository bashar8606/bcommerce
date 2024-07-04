

import { useRef, useState, useEffect } from "react";
 
export const useHeader = () => {

  const main = useRef(null);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (currentScrollTop > lastScrollTop) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 



  return {
    main,
    isScrollingDown
  };
};
