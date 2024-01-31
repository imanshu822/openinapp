import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import UploadedFilesTable from "./UploadedFilesTable";

import "./drop-file-input.css";

import excelImg from "../assets/Microsoft_Office_Excel_(2019–present) 1.png";
import uploadImg from "../assets/Icon.svg";

const DropFileInput = ({ onFileChange }) => {
  const wrapperRef = useRef(null);
  const [fileList, setFileList] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (
      newFile &&
      newFile.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      setFileList([...fileList, newFile]);
    } else {
      alert("Please select an Excel file.");
    }
  };

  const fileRemove = (file) => {
    const updatedList = fileList.filter((item) => item !== file);
    setFileList(updatedList);
  };

  const uploadFiles = () => {
    const updatedUploadedFiles = [
      ...uploadedFiles,
      ...fileList.map((file) => ({
        name: file.name,
        prefix: file.name.split(".")[0], // Assuming prefix is the part before the first dot in the filename
      })),
    ];
    setUploadedFiles(updatedUploadedFiles);
    setFileList([]); // Clear fileList after uploading
  };

  return (
    <div className="w-full h-min-screen overflow-y-auto">
      <div className="w-[596px] mx-auto mt-[140px] h-[367px] bg-white flex flex-col p-4 gap-4 justify-center items-center rounded-md">
        <div
          ref={wrapperRef}
          className={`w-full z-0 h-full flex flex-col justify-center items-center ${
            fileList.length > 0 ? null : "drop-file-input"
          } border-dotted border-[#EBEBEB] border-2`}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <img src={excelImg} alt="excelImg" />

          {fileList.length > 0 ? (
            <div>
              {fileList.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-4 mt-[20px]"
                >
                  <p className="text-[#999CA0]">{item.name} </p>{" "}
                  <a
                    href="#"
                    onClick={() => fileRemove(item)}
                    className="ml-1 text-red-700"
                  >
                    {" "}
                    Remove
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex z-10 mt-[20px]">
              <p>Drop your excel sheet here or </p>{" "}
              <a href="#" className="ml-1 text-blue-700">
                {" "}
                browse
              </a>
              <input type="file" onChange={onFileDrop} />
            </div>
          )}
        </div>
        <button
          onClick={uploadFiles}
          className="bg-[#605BFF] h-1/5 rounded-xl w-full font-bold text-white"
          disabled={fileList.length === 0}
        >
          <div className="flex justify-center gap-2">
            <img src={uploadImg} alt="upload svg" />
            <p>Upload</p>
          </div>
        </button>

        {/* Display uploaded files in the table */}
      </div>
      <UploadedFilesTable files={uploadedFiles} />
    </div>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
