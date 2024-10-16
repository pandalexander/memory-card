import { useEffect, useState } from "react";
const url = import.meta.env.VITE_WIRT_URL;

export default function Game() {
  const [image, setImage] = useState();

  const fetchImage = async (setState) => {
    const response = await fetch(url);
    const imageBlob = await response.blob();
    const imageBlobUrl = URL.createObjectURL(imageBlob);
    setState(imageBlobUrl);
  };

  useEffect(() => {
    fetchImage(setImage);
  }, []);

  return (
    <>
      <h1>hey</h1>
      <img src={image} alt="" className="w-screen h-auto" />
    </>
  );
}
