import React from "react";
import { Document, Page } from "react-pdf";
import "./pdfviewer.css";

export default function PdfViewer({ pdf }) {
  return (
    <div className="pdf-container">
      <Document file={pdf} options={{ workerSrc: "/pdf.worker.js" }}>
        <Page size="A4" pageNumber={1} wrap={true} />
      </Document>
    </div>
  );
}
