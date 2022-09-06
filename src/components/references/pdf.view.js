import { useState, useContext } from "react";
import { PdfContext } from '../../contexts/pdf.context';
import { Document, Page } from "react-pdf";
import { AiOutlineCloseCircle as Close } from 'react-icons/ai';

const PdfView = (props) => {

    const { pdf } = props;
    const [numPages, setNumPages] = useState(null);
    const { setPdfNumerClick } = useContext(PdfContext)

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    function handleClick() {
        document.getElementsByClassName("pdf-container")[0].style.display = 'none';
        setPdfNumerClick(0);
        document.body.style.overflow = "scroll";
    }

    document.body.style.overflow = "hidden"
    return (
        <div className="pdf-container" style={{ display: "flex" }}>
            <div className="pdf-box ">
                <Document
                    file={pdf}
                    options={{ workerSrc: "/pdf.worker.js" }}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                    ))}
                </Document>
            </div>
            <Close size={50} color={'#362d97'} className='close-button' onClick={handleClick} />

        </div>
    );
}

export default PdfView;