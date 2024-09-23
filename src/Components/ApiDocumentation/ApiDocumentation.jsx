/* eslint-disable no-unused-vars */
import React from "react";
import "./faq.css";
import Title from "../Shared/Title/Title";

const apiDocumentation = [
  {
    id: "apiOverview",
    heading: "API Overview",
    content: `
      Our API allows developers to integrate our services into their applications seamlessly. 
      It provides endpoints for accessing and managing resources, creating content, and more. 
      All API requests must be made over HTTPS and include the necessary authentication headers.
    `,
  },
  {
    id: "authentication",
    heading: "Authentication",
    content: `
      To use our API, you must include an API key in the header of your requests. 
      You can obtain an API key by signing up on our platform and creating a developer account. 
      Here's an example of how to include the API key in your request headers:
      
      \`\`\`javascript
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
      }
      \`\`\`
    `,
  },
  {
    id: "getContent",
    heading: "GET /api/content",
    content: `
      This endpoint retrieves a list of available content types and their details. 
      
      **Request:**
      \`\`\`http
      GET /api/content
      \`\`\`
      
      **Response:**
      \`\`\`json
      [
        {
          "id": "1",
          "title": "Blog Post",
          "description": "Generates a complete blog post based on input."
        },
        {
          "id": "2",
          "title": "Social Media Ad",
          "description": "Creates engaging ad content for social media platforms."
        }
      ]
      \`\`\`
    `,
  },
  {
    id: "createContent",
    heading: "POST /api/content/create",
    content: `
      This endpoint generates content based on the input parameters you provide. 
      
      **Request:**
      \`\`\`http
      POST /api/content/create
      \`\`\`
      
      **Body:**
      \`\`\`json
      {
        "type": "blog",
        "title": "5 Tips for Effective Time Management",
        "keywords": ["productivity", "time management", "work-life balance"]
      }
      \`\`\`
      
      **Response:**
      \`\`\`json
      {
        "success": true,
        "content": "Here are 5 tips to help you manage your time effectively..."
      }
      \`\`\`
    `,
  },
  {
    id: "rateLimits",
    heading: "Rate Limits",
    content: `
      Our API enforces rate limits to ensure fair usage and system stability. 
      The default rate limit is 1000 requests per hour. If you exceed this limit, 
      you will receive a 429 Too Many Requests response. Contact our support team 
      if you need a higher rate limit for your application.
    `,
  },
];

const Faq = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-sm-12 col-xs-12">
          <div className="accordion" id="accordionExample">
            {apiDocumentation.map(({ id, content, heading }, index) => {
              return (
                <div key={id} className="accordion-item">
                  <h2 className="accordion-header" id={id}>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${id}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${id}`}
                    >
                      {heading}
                    </button>
                  </h2>
                  <div
                    id={`collapse${id}`}
                    className={`accordion-collapse ${index === 0 ? "show" : "collapse"}`}
                    aria-labelledby={id}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">{content}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
