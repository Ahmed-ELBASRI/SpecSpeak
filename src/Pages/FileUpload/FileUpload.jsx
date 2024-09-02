import { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./FileUpload.css";
import { Image } from "./Image.js";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import { ScrollRestoration } from "react-router-dom";

const FileUpload = (props) => {
  const wrapperRef = useRef(null);
  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
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
            <img src={"src/assets/img/upload-file.png"} alt="" />
            <p>
              Click and <strong>Upload/Drag</strong> you OpenApi file
            </p>
          </div>
          <input type="file" value="" onChange={onFileDrop} />
        </div>
      </div>

      {fileList.length > 0 && (
        <>
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
                    <p>{item.size}B</p>
                  </div>
                  <span
                    className="drop-file-preview__item__del"
                    onClick={() => fileRemove(item)}
                  >
                    x
                  </span>
                </div>
              ))}
            </div>
            <div className="upload-button-container">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                {"Submit ✔"}{" "}
              </button>
            </div>
          </div>
        </>
      )}

      <ScrollRestoration />
    </>
  );
};

FileUpload.propTypes = {
  onFileChange: PropTypes.func,
};

export default FileUpload;
