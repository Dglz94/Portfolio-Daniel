import React from "react";
import { Link } from "react-router-dom";
import { Document, Page } from "react-pdf";
import icons from "../../utils/icons";
import "./pdfviewer.css";

export default function PdfViewer({ pdf }) {
  return (
    <div className="pdf-container">
      <Link to={"/"}>
        {icons.pdf.return}
      </Link>
      <Document file={pdf} options={{ workerSrc: "/pdf.worker.js" }}>
        <Page size="A4" pageNumber={1} wrap={true} />
      </Document>
    </div>
  );
}
