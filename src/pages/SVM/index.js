import React, { useState } from "react";
import { Upload, Button, message, Spin } from "antd";
import { LoadingOutlined, UploadOutlined, CloudDownloadOutlined } from "@ant-design/icons";
import loGet from "lodash/get";
import "./style.css";
import App from "../../App";
import dayjs from "dayjs";


const LIMIT = 6;
const fake = [
  { ID: 'Ligand275769', file: "Ligand275769.xyz" },
  { ID: "Ligand275770", file: "Ligand275770.xyz" },
  { ID: "Ligand275771", file: "Ligand275771.xyz" },
];

const FileUpload = () => {
  const [loading, setLoading] = useState(false);
  const [activeList, setActiveList] = useState(fake);
  const [hasResult, setHasResult] = useState(false);
  const [resultFile, setResultFile] = useState("404");

  const isEmpty = activeList.length === 0;

  const props = {
    name: "file", // 发到后端的文件参数名
    action: "http://167.86.107.213:5000/svm", // 上传的地址
    headers: {
      authorization: "authorization-text",
    },
    beforeUpload: (file) => {
      setLoading(true); // 在上传前设置 loading 为 true
      return true;
    },
    showUploadList: false,
    onChange(info) {
      setHasResult(false)
      console.log("===info", info);
      if (info.file.status === "done") {
        setLoading(false);
        message.success(`${info.file.name} file uploaded successfully`);
        const list = loGet(info, "file.response.list", []);
        const retName = loGet(info, "file.response.out", []);
        if (list.length !== 0) {
          setActiveList(list.filter((d) => d.pred === "1"));
          setResultFile(retName);
          setHasResult(true)
        }
      } else if (info.file.status === "error") {
        setLoading(false);
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const handleDownload = () => {
    const anchor = document.createElement('a');
    anchor.href = `http://167.86.107.213:5001/temp_data/${resultFile}`;
    anchor.download = `svm_result_${dayjs().format('YYYY_MM_DD_hh_mm_ss')}.csv`; 
    anchor.click();
  };

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div className="svm-container">
      <h1>SVM</h1>
      <Spin spinning={loading} indicator={antIcon}>
        <Upload.Dragger {...props} style={{ padding: 16 }}>
          <p className="ant-upload-drag-icon">
            <UploadOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Upload.Dragger>
      </Spin>
      {hasResult && <Button icon={<CloudDownloadOutlined />} onClick={handleDownload}>Download Results!</Button>}
      {hasResult && activeList.length > LIMIT && <h3>WARN: Only show the first {LIMIT} results...</h3>}
      {!isEmpty && hasResult && (
        <div className="svm-act-result" >
          {activeList.slice(0, LIMIT).map((molecular) => {
            const { ID, file } = molecular;
            return (
              <div key={ID} className="svm-block">
                <div className="svm-block-header">{ID}</div>
                <div className="svm-block-model"><App link={`http://167.86.107.213:5001/temp_data/${file}`} hide /></div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
