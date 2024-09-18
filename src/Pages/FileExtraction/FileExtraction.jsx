import React from "react";
import ExtractionTable from "../../Components/ExtractionTable/ExtractionTable";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import { ScrollRestoration } from "react-router-dom";
const FileExtraction = () => {
  return (
    <>
      <PageHeader pageName={"Extracted endpoints"}></PageHeader>
      <ExtractionTable />
      <ScrollRestoration></ScrollRestoration>
    </>
  );
};

export default FileExtraction;
