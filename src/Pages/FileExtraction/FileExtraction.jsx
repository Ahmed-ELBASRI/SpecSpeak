import React from "react";
import ExtractionTable from "../../Components/ExtractionTable/ExtractionTable";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import { ScrollRestoration } from "react-router-dom";
const FileExtraction = () => {
  return (
    <>
      <PageHeader pageName={"Chat with GPT"}></PageHeader>
      <ExtractionTable />
      <ScrollRestoration></ScrollRestoration>
    </>
  );
};

export default FileExtraction;
