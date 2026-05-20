import fetchData from "../services/fetchData.js";

const getToken = () => localStorage.getItem("token");

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    };

    const loginResult = await fetchData(
      import.meta.env.VITE_AUTH_API + "/auth/login",
      fetchOptions
    );

    return loginResult;
  };

  return { postLogin };
};

const useUser = () => {
  const postUser = async (inputs) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    };

    const userResult = await fetchData(
      import.meta.env.VITE_AUTH_API + "/users",
      fetchOptions
    );

    return userResult;
  };

  const getUserByToken = async (token = getToken()) => {
    const fetchOptions = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    const userResult = await fetchData(
      import.meta.env.VITE_AUTH_API + "/users/token",
      fetchOptions
    );

    return userResult;
  };

  return { postUser, getUserByToken };
};

const useFile = () => {
  const postFile = async (file, token = getToken()) => {
    const formData = new FormData();
    formData.append("file", file);

    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    };

    const fileResult = await fetchData(
      import.meta.env.VITE_UPLOAD_SERVER + "/upload",
      fetchOptions
    );

    return fileResult;
  };

  return { postFile };
};

const useMedia = () => {
  const getMedia = async () => {
    const mediaResult = await fetchData(import.meta.env.VITE_MEDIA_API + "/media");
    return mediaResult;
  };

  const postMedia = async (fileData, inputs, token = getToken()) => {
    const mediaObject = {
      title: inputs.title,
      description: inputs.description,
      filename: fileData.data.filename,
      filesize: fileData.data.filesize,
      media_type: fileData.data.media_type,
    };

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(mediaObject),
    };

    const mediaResult = await fetchData(
      import.meta.env.VITE_MEDIA_API + "/media",
      fetchOptions
    );

    return mediaResult;
  };

  return { getMedia, postMedia };
};

export { useAuthentication, useUser, useFile, useMedia };
