// UploadedFilesTable.js
import React from "react";

const UploadedFilesTable = ({ files }) => {
  return (
    <div className="mt-20 w-full px-10 flex flex-col justify-start items-center">
      <h1 className="w-full text-left font-bold text-2xl mb-10">Uploads</h1>
      <table className="w-full bg-[#f2f2f2] rounded-lg">
        <thead>
          <tr>
            <th>
              <p className="mx-8 my-5 w-full text-left">Sl No.</p>
            </th>
            <th>
              <p className="my-5 w-full text-left">Prefix</p>
            </th>
            <th>
              <p className="my-5 w-full text-left">File Name</p>
            </th>
            <th>
              <p className="my-5 w-full text-left">Add Tags</p>
            </th>
          </tr>
        </thead>
        <tbody className="">
          {files.map((file, index) => (
            <>
              <tr key={index}>
                <td>
                  <p className="rounded-l-md ml-4 pl-6 py-4 bg-white">
                    {index + 1}
                  </p>
                </td>
                <td>
                  <p className="py-4 bg-white">{file.prefix}</p>
                </td>
                <td>
                  <p className="py-4 bg-white">{file.name}</p>
                </td>
                <td>
                  <p className="rounded-r-md mr-4 py-4 bg-white">
                    Add Tags Placeholder
                  </p>
                </td>
              </tr>
              <br />
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UploadedFilesTable;
