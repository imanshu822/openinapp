import React, { useState } from "react";

// Define a new component for a single row
const UploadedFileRow = ({
  file,
  index,
  selectedTags,
  handleTagSelection,
  removeTag,
}) => {
  return (
    <tr>
      <td>
        <p className=" bg-white rounded-l-md ml-4 mt-2 mb-2 pl-6 py-3">
          <span>0</span>
          {index + 1}
        </p>
      </td>
      <td>
        <p className=" bg-white py-3 text-blue-400 underline">
          <a href="http://www.google.com">www.google.com</a>
        </p>
      </td>
      <td>
        <p className="mt-2 mb-2 bg-white py-3">{file.prefix}</p>
      </td>
      <td>
        <p className="mt-2 mb-2 bg-white py-3 ">
          <select
            id={`tags-${index}`} // Use a unique id for each dropdown
            className="border border-gray-400 rounded-md px-2"
            onChange={(e) => handleTagSelection(e, index)} // Pass index to handleTagSelection
          >
            <option value="">Select Tags</option>
            <option value="TAG 1">Tag 1</option>
            <option value="TAG 2">Tag 2</option>
            <option value="TAG 3">Tag 3</option>
            <option value="TAG 4">Tag 4</option>
            <option value="TAG 5">Tag 5</option>
          </select>
        </p>
      </td>
      <td>
        <div
          className={`bg-white mt-2 mb-2 mr-4 rounded-r-md  ${
            selectedTags[index] && selectedTags[index].length
              ? "py-2.5"
              : "py-6"
          }`}
        >
          {selectedTags[index] &&
            selectedTags[index].map((tag, idx) => (
              <span
                key={idx}
                className="inline-block bg-[#605BFF] rounded-md px-3 py-1 text-sm font-semibold text-white mr-2"
              >
                {tag}
                <button onClick={() => removeTag(index, tag)} className="ml-2">
                  x
                </button>
              </span>
            ))}
        </div>
      </td>
    </tr>
  );
};

// UploadedFilesTable component
const UploadedFilesTable = ({ files }) => {
  // Define state to keep track of selected tags for each row
  const [selectedTagsMap, setSelectedTagsMap] = useState({});

  // Function to handle tag selection for a specific row
  const handleTagSelection = (e, index) => {
    const selectedTag = e.target.value;
    if (!selectedTagsMap[index]?.includes(selectedTag)) {
      setSelectedTagsMap((prevState) => ({
        ...prevState,
        [index]: prevState[index]
          ? [...prevState[index], selectedTag]
          : [selectedTag],
      }));
    }
  };

  // Function to remove a tag from the selected tags of a specific row
  const removeTag = (index, tagToRemove) => {
    setSelectedTagsMap((prevState) => ({
      ...prevState,
      [index]: prevState[index].filter((tag) => tag !== tagToRemove),
    }));
  };

  return (
    <div className="mt-20 mb-20 w-full px-10 flex flex-col justify-start items-center">
      <h1 className="w-full text-left font-bold text-2xl mb-10">Uploads</h1>
      <table className="w-full bg-[#f2f2f2] rounded-lg">
        <thead>
          <tr>
            <th>
              <p className="mx-8 my-5 w-full text-left">Sl No.</p>
            </th>
            <th>
              <p className="my-5 w-full text-left">Link</p>
            </th>
            <th>
              <p className="my-5 w-full text-left">Prefix</p>
            </th>
            <th>
              <p className="my-5 w-full text-left">Add Tags</p>
            </th>
            <th>
              <p className="my-5 w-full text-left">Selected Tags</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <UploadedFileRow
              key={index}
              file={file}
              index={index}
              selectedTags={selectedTagsMap}
              handleTagSelection={handleTagSelection}
              removeTag={removeTag}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UploadedFilesTable;
