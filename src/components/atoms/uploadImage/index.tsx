import { useState } from "react";
import { Upload } from "antd";
import "./style.css";

const UploadImg = () => {
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
  };
  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
      >
        {fileList.length < 1 && "+ Upload"}
      </Upload>
    </>
  );
};

export default UploadImg;
