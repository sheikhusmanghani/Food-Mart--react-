// isValidFileType
export const isValidFileType = (file) => {
  const fileTypes = ["image/png", "image/jpeg", "image/jpg"];
  return fileTypes.includes(file.type);
};

// sendFileToCloud

export const sendFileToCloud = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "first-cloudinary-app");
  data.append("cloud_name", "dp2y4fbqv");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dp2y4fbqv/image/upload",
    {
      method: "POST",
      body: data,
    }
  );

  const uploadedImage = await res.json();

  return uploadedImage.url;
};
