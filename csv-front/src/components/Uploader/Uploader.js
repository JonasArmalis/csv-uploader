import React, { useState } from "react";
import "./uploader.css";

const Uploader = () => {
  // const [data, setData] = useState();
  //console.log(data);
  const [file, setFile] = useState();

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    const formData = new FormData();
    formData.append("file", file);
    fetch("http://localhost:8080/upload", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: 50 }}>Upload csv </h1>
      <form onSubmit={handleUpload}>
        <input
          name="csvFile"
          type={"file"}
          id="upload-btn"
          accept={".csv"}
          onChange={handleFile}
          hidden
        />
        <label htmlFor="upload-btn">Choose File</label>
        <div>{file && `${file.name} - ${file.type}`}</div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Uploader;
