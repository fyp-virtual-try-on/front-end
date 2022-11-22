import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import "antd/dist/antd.css";
// import { Button, Dropdown, Menu, Space } from 'antd';
import imageUpload from "./imageUpload";
import SecondBar from "./SecondBar/SecondBar";
import { Button } from "@material-ui/core";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import "./VirtualTry.css";
import useDrivePicker from "react-google-drive-picker";
import Webcam from "react-webcam";
import { useDispatch } from "react-redux";
import { cartItem } from "../../store/cartItem/cartItemSlice";

import img1 from "../../images/img_1.jpg";
import img2 from "../../images/img_2.jpg";
import img3 from "../../images/img_3.jpg";
import img4 from "../../images/img_4.jpg";

const { Dragger } = Upload;
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

function VirtualTry() {
  const todos = useSelector((state) => state);
  // const item = useSelector((state) => state);
  const [uploadImageURL, setUploadImageURL] = useState("");
  const dispatch = useDispatch();

  const [driveObj, setDriveObj] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [isCamera, setIsCamera] = useState(false);

  const [picture, setPicture] = useState("");
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  });

  const [openPicker, data, authResponse] = useDrivePicker();

  const dummyRequest = async ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const props = {
    name: "file",
    multiple: false,
    // action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    customRequest: dummyRequest,

    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);

        setUploadImageURL(URL.createObjectURL(info.file.originFileObj));
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

  const handleOpenPicker = () => {
    openPicker({
      clientId:
        "843861638932-3a853gfcdmvdk4k2n7i7g8tbe5fq3qgl.apps.googleusercontent.com",
      developerKey: "AIzaSyC7PwiaGP7I7hsJ48XfiPNV0n9pBiabPJ0",
      viewId: "DOCS_IMAGES",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: false,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        console.log(data);
        // console.log("imag id=> ", );
        setDriveObj(data.docs[0]?.id);
      },
    });
  };

  useEffect(() => {
    if (data) {
      data?.docs?.map((i) => console.log(i));
    }
  }, []);

  const items = [
    {
      id: 1,
      name: "T-Shirt",
      image: img1,
    },
    {
      id: 2,
      name: "Shirt",
      image: img2,
    },
    {
      id: 3,
      name: "Pant",
      image: img3,
    },
    {
      id: 4,
      name: "Shoes",
      image: img4,
    },
  ];

  return (
    <>
      {console.log("todos", todos)}
      {/* {console.log("item", item)} */}
      <div className="VT-wrapp">
        <div>
          <SecondBar />
        </div>
        <div className="VT-grid">
          <div style={{ textAlign: "center" }}>
            <div class="dropdown">
              <button class=" button dropbtn">Insert an Image</button>
              <div class="img-drop-down">
                <span onClick={() => setIsCamera(true)}>Capture Image</span>
                <Upload {...props}>
                  <span style={{ color: "white" }}>Upload from Device</span>
                </Upload>
                <span onClick={() => handleOpenPicker()}>
                  Upload from Drive
                </span>
              </div>
            </div>
            <div>
              <img src={selectedImage} alt="" />
            </div>
            <div className="output">output</div>

            <div style={{ marginTop: "20px" }}>
              <button className="button">Execute</button>
            </div>
            <div>
              {isCamera ? (
                <>
                  <Webcam
                    audio={false}
                    height={400}
                    ref={webcamRef}
                    width={400}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setPicture();
                    }}
                    className="button"
                  >
                    Retake
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      capture();
                    }}
                    className="button"
                  >
                    Capture
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();

                      setIsCamera(false);
                    }}
                    className="button"
                  >
                    cancel
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          </div>

          <div style={{ padding: "20px" }}>
            <div>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                Virtual TryOn Catalouge
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gridColumnGap: "8px",
                }}
              >
                {items.map((item) => (
                  <div
                    onClick={() => setSelectedImage(item.image)}
                    className={
                      selectedImage === item.image ? "item-selected" : ""
                    }
                    style={{ padding: "20px" }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      width={159}
                      height={184}
                      srcset=""
                    />
                    <p style={{ textAlign: "center" }}>{item.name}</p>
                    <button
                      onClick={() => dispatch(cartItem(item))}
                      className="button"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            {!uploadImageURL ? (
              !driveObj ? (
                !picture ? (
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibit
                      from uploading company data or other band files
                    </p>
                  </Dragger>
                ) : (
                  <img
                    src={picture}
                    style={{
                      width: "400px",
                      height: "-webkit-fill-available",
                      objectFit: "cover",
                      width: "100%",
                    }}
                    alt=""
                  />
                )
              ) : (
                <img
                  // src={driveObj?.docs[0]?.embedUrl}
                  src={
                    driveObj
                      ? `https://drive.google.com/uc?export=view&id=${driveObj}`
                      : null
                  }
                  // src="https://drive.google.com/uc?export=view&id=1VOS6M-0ys0g0Kz2AA3WbkDxSV9f0eRG7"
                  style={{
                    width: "400px",
                    height: "-webkit-fill-available",
                    objectFit: "cover",
                    width: "100%",
                  }}
                  alt=""
                  srcset=""
                />
              )
            ) : (
              <img
                // src={driveObj?.docs[0]?.embedUrl}
                src={uploadImageURL}
                // src="https://drive.google.com/uc?export=view&id=1VOS6M-0ys0g0Kz2AA3WbkDxSV9f0eRG7"
                style={{
                  width: "400px",
                  height: "-webkit-fill-available",
                  objectFit: "cover",
                  width: "100%",
                }}
                alt=""
                srcset=""
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default VirtualTry;
