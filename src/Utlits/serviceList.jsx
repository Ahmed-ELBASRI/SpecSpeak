import {
  TfiUpload,
  TfiSearch,
  TfiCommentAlt,
  TfiCheckBox,
  // TfiEdit,
  TfiReload,
  TfiLayout,
  // TfiUsers,
} from "react-icons/tfi";
import {
  FiEdit2,
  FiUsers
} from "react-icons/fi";
export const serviceList = [

  {
    id: 1,
    title: "OpenAPI Upload",
    desc: "Easily upload OpenAPI specifications for instant analysis and insights.",
    icon: <TfiUpload />,
    delay: "100",
  },
  {
    id: 2,
    title: "API Discovery",
    desc: "Discover and list available APIs from your specifications with ease.",
    icon: <TfiSearch />,
    delay: "200",
  },
  {
    id: 3,
    title: "NL Descriptions",
    desc: "Convert complex API details into clear, natural language summaries.",
    icon: <TfiCommentAlt />,
    delay: "300",
  },
  {
    id: 4,
    title: "Interactive API Selection",
    desc: "Select one or multiple APIs for targeted analysis and insights.",
    icon: <TfiCheckBox />,
    delay: "400",
  },
  {
    id: 5,
    title: "Custom Correction Prompts",
    desc: "Provide corrections and refine descriptions to ensure accuracy.",
    icon: <FiEdit2 />,
    delay: "500",
  },
  {
    id: 6,
    title: "Real-time Feedback",
    desc: "Receive immediate feedback and updates on API descriptions.",
    icon: <TfiReload />,
    delay: "600",
  },
  {
    id: 7,
    title: "User-friendly Interface",
    desc: "Enjoy a seamless experience with an intuitive and accessible UI.",
    icon: <TfiLayout />,
    delay: "700",
  },
  {
    id: 8,
    title: "Enhanced Collaboration",
    desc: "Collaborate with your team for comprehensive API understanding.",
    icon: <FiUsers />,
    delay: "800",
  },
];

