import React from "react";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import ApiDocumentation from "../../Components/ApiDocumentation/ApiDocumentation";
import { ScrollRestoration } from "react-router-dom";

const AllFaq = () => {
  return (
    <>
      <PageHeader pageName={"Api Documentation"} />
      <section className="faq_area">
        <div className="section-title-two">
          {/* <h2>Api Documentation</h2> */}
        </div>
        <ApiDocumentation />
      </section>
      <ScrollRestoration/>
    </>
  );
};

export default AllFaq;
