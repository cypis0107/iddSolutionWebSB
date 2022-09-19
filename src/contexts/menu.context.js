import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    const value = { hamburgerMenu, setHamburgerMenu };

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}