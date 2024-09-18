import { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./FileUpload.css";
import { Image } from "./Image.js";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import { extractApiDetails } from "../../Components/Services/ChatService"; // Updated function to handle upload and extraction
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const FileUpload = (props) => {
  const wrapperRef = useRef(null);
  const [fileList, setFileList] = useState([]);
  const [uploadStatus, setUploadStatus] = useState(""); // State to manage upload status
  const [showToast, setShowToast] = useState(false); // State to handle toast visibility
  const [toastSeverity, setToastSeverity] = useState(""); // 'success' or 'warning'
  const navigate = useNavigate();

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      // Validate the file
      if (!isValidOpenAPIFile(newFile)) {
        setUploadStatus("Invalid file type. Please upload an OpenAPI file.");
        setToastSeverity("warning");
        setShowToast(true); // Show toast for invalid file type
        return;
      }
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const isValidOpenAPIFile = (file) => {
    const validExtensions = ["json", "yaml", "yml"];
    const fileExtension = file.name.split(".").pop().toLowerCase();
    return validExtensions.includes(fileExtension);
  };

  const fileRemove = (file) => {
    const updatedList = fileList.filter((f) => f !== file);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  const handleFileUpload = async () => {
    if (fileList.length === 0) {
      setUploadStatus("Please select a file to upload.");
      return;
    }
  
    try {
      setUploadStatus("Uploading...");
      const response = await extractApiDetails(fileList[0]);
  
      if (!response) {
        setUploadStatus("Error uploading file. Please try again.");
        setToastSeverity("warning");
        setShowToast(true);
        return;
      }
  
      // Store the API endpoints' result in localStorage
      localStorage.setItem("apiEndpoints", JSON.stringify(response));
      setUploadStatus("File uploaded and extracted successfully.");
      setToastSeverity("success");
      setShowToast(true);
  
      // Redirect to the Extraction Table page after showing success toast for 3 seconds
      setTimeout(() => {
        setShowToast(false);
        navigate("/endpoints");
      }, 3000);
    } catch (error) {
      console.error("Error during file upload:", error);
      setUploadStatus("Error uploading file. Please try again.");
      setToastSeverity("warning");
      setShowToast(true);
    }
  };
  

  const handleClose = () => {
    setShowToast(false);
  };

  return (
    <>
      <PageHeader pageName={"OpenApi File Upload"} />
      <div className="drop-file-container">
        <div
          ref={wrapperRef}
          className="drop-file-input"
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className="drop-file-input__label">
            <img src={"src/assets/img/upload-file.png"} alt="Upload Icon" />
            <p>
              Click and <strong>Upload/Drag</strong> your OpenAPI file
            </p>
          </div>
          <input type="file" onChange={onFileDrop} />
        </div>
      </div>

      {fileList.length > 0 && (
        <div className="drop-file-preview-container">
          <div className="drop-file-preview">
            <p className="drop-file-preview__title">Ready to upload</p>
            {fileList.map((item, index) => (
              <div key={index} className="drop-file-preview__item">
                <img
                  src={Image[item.type.split("/")[1]] || Image["default"]}
                  alt=""
                />
                <div className="drop-file-preview__item__info">
                  <p>{item.name}</p>
                  <p>{(item.size / 1024).toFixed(2)} KB</p>
                </div>
                <span
                  className="drop-file-preview__item__del"
                  onClick={() => fileRemove(item)}
                >
                  <span className="close-x">×</span>
                </span>
              </div>
            ))}
          </div>
          <div className="upload-button-container">
            <button
              type="button"
              onClick={handleFileUpload}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Upload ✔
            </button>
          </div>
        </div>
      )}

      {/* Toast notifications */}
      {showToast && (
        <Snackbar
          open={showToast}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity={toastSeverity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {uploadStatus}
          </Alert>
        </Snackbar>
      )}

      <ScrollRestoration />
    </>
  );
};

FileUpload.propTypes = {
  onFileChange: PropTypes.func,
};

export default FileUpload;
