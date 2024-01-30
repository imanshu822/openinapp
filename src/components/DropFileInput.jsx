import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import "./drop-file-input.css";

import { ImageConfig } from "../config/ImageConfig";
import excelImg from "../assets/Microsoft_Office_Excel_(2019–present) 1.png";
import uploadImg from "../assets/Icon.svg";
const DropFileInput = (props) => {
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
      // props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    // props.onFileChange(updatedList);
  };

  return (
    <>
      <div className="w-[596px] mx-auto mt-[140px] h-[367px] bg-white flex flex-col p-4 gap-4 justify-center items-center  rounded-md">
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
              <input type="file" value="" onChange={onFileDrop} />
            </div>
          )}
        </div>
        <button
          // className="w-full h-1/5 bg-[#605BFF] border-2 rounded-md text-white"
          className="bg-[#605BFF]  h-1/5 rounded-xl w-full font-bold text-white "
        >
          <div className="flex justify-center gap-2">
            <img src={uploadImg} alt="upload svg" />
            <p>Upload</p>
          </div>
        </button>
      </div>
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
