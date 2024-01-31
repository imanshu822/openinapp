import React from "react";
const UploadHistory = () => {
  return (
    <div className="w-full h-[300px]">
      <h1 className="text-black font-bold text-[21px] sm:text-[24px]">
        Uploads
      </h1>
      <div className="w-full h-full bg-[#F5F5F5]">
        <div className="flex p-4 w-full justify-betwee">
          <table>
            <tr className="flex gap-[200px] justify-between mt-4">
              <th>Sl No.</th>
              <th>Links</th>
              <th>Prefix</th>
              <th>Add Tags</th>
            </tr>
            <td></td>
          </table>
        </div>
      </div>
    </div>
  );
};
export default UploadHistory;
