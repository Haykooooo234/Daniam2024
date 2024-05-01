import { useEffect, useState } from "react";

const useNavbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu((prev) => !prev);
    };
   
     const closeMenuOnMobile = () => {
       if (window.innerWidth <= 1150) {
         setShowMenu(false);
       }
     };
  
     useEffect(() => {
      window.addEventListener('resize', closeMenuOnMobile);
  
      return () => {
        window.removeEventListener('resize', closeMenuOnMobile);
      };
    }, []);
  
    const handleScrollToTop = () => {
      window?.scrollTo(0, 0);
    }

    
    return {
        toggleMenu,
        closeMenuOnMobile,
        handleScrollToTop,
        showMenu,
    }
}

export default useNavbar;
