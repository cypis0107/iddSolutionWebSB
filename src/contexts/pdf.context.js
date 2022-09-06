import { createContext, useState } from "react";

export const PdfContext = createContext({
    pdfNumberClick: null,
    setPdfNumerClick: null
});

export const PdfProvider = ({ children }) => {
    const [pdfNumberClick, setPdfNumerClick] = useState(0);
    const value = { pdfNumberClick, setPdfNumerClick };

    return <PdfContext.Provider value={value}>{children}</PdfContext.Provider>
}