import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/formHooks.js";
import { useFile, useMedia } from "../hooks/apiHooks.js";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { postFile } = useFile();
  const { postMedia } = useMedia();

  const initValues = {
    title: "",
    description: "",
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      console.log(event.target.files[0]);
      setFile(event.target.files[0]);
    }
  };

  const doUpload = async () => {
    try {
      if (!file) {
        setMessage("Please choose a file first.");
        return;
      }

      const token = localStorage.getItem("token");

      if (!token) {
        setMessage("You must log in before uploading.");
        return;
      }

      const fileResult = await postFile(file, token);
      console.log("file upload result", fileResult);

      const mediaResult = await postMedia(fileResult, inputs, token);
      console.log("media post result", mediaResult);

      setMessage("Upload successful.");
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      console.log(error.message);
      setMessage(error.message);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(doUpload, initValues);

  const previewUrl = file ? URL.createObjectURL(file) : "https://placehold.co/240x180?text=Choose+image";

  return (
    <section className="card">
      <h1>Upload</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          id="title"
          value={inputs.title}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          rows={5}
          id="description"
          value={inputs.description}
          onChange={handleInputChange}
        />

        <label htmlFor="file">File</label>
        <input
          name="file"
          type="file"
          id="file"
          accept="image/*, video/*"
          onChange={handleFileChange}
        />

        {file && file.type.startsWith("video") ? (
          <video src={previewUrl} controls width="240" />
        ) : (
          <img src={previewUrl} alt="preview" width="240" />
        )}

        <button type="submit" disabled={!(file && inputs.title.length > 3)}>
          Upload
        </button>
      </form>

      {message && <p className="message">{message}</p>}
    </section>
  );
};

export default Upload;
