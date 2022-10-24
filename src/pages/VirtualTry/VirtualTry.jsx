import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import "antd/dist/antd.css";
// import { Button, Dropdown, Menu, Space } from 'antd';
import imageUpload from "./imageUpload";
import SecondBar from "./SecondBar/SecondBar";
import "./VirtualTry.css";

const { Dragger } = Upload;

function VirtualTry() {
  const [uploadImageURL, setUploadImageURL] = useState("");

  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
        // setUploadImageURL(URL.createObjectURL(info.file.originFileObj));
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <>
      {console.log({ imageUpload })}
      <div className="VT-wrapp">
        <div>
          <SecondBar />
        </div>
        <div className="VT-grid">
          <div class="dropdown">
            <button class=" button dropbtn">Insert an Image</button>
            <div class="dropdown-content">
              <a href="#">Recently uploaded</a>
              <a href="#">Upload from Device</a>
              <a href="#">Upload from Drive</a>
            </div>
          </div>

          <div>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other band files
              </p>
            </Dragger>
          </div>
          <div style={{ padding: "20px" }}>
            <div>
              <p>Catelog</p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gridColumnGap: "8px",
                }}
              >
                <div style={{ padding: "20px" }}>
                  <img
                    src="https://img.freepik.com/premium-photo/waterfall-landscape-plitvice-lakes-croatia_31965-5308.jpg?w=2000"
                    alt=""
                    width={240}
                    height={248}
                    srcset=""
                  />
                </div>
                <div>
                  <div style={{ padding: "20px" }}>
                    <img
                      src="https://img.freepik.com/premium-photo/waterfall-landscape-plitvice-lakes-croatia_31965-5308.jpg?w=2000"
                      alt=""
                      width={240}
                      height={248}
                    />
                  </div>

                  <div style={{ padding: "20px" }}>
                    <img
                      src="https://img.freepik.com/premium-photo/waterfall-landscape-plitvice-lakes-croatia_31965-5308.jpg?w=2000"
                      alt=""
                      width={240}
                      height={248}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VirtualTry;
