import { createContext, useState, useEffect } from "react";

export const ViewportContext = createContext();

export const ViewportProvider = ({ children }) => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const breakpoint = 1200;

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <ViewportContext.Provider value={{ width, height, breakpoint }}>
            {children}
        </ViewportContext.Provider>
    );
};

