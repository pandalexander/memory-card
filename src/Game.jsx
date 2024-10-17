import { useEffect, useState } from "react";

export default function Game() {
  const [adelaideImage, setAdelaideImage] = useState();
  const [beastImage, setBeastImage] = useState();
  const [beatriceImage, setBeatriceImage] = useState();
  const [endicottImage, setEndicottImage] = useState();
  const [enochImage, setEnochImage] = useState();
  const [frogImage, setFrogImage] = useState();
  const [gregImage, setGregImage] = useState();
  const [greyImage, setGreyImage] = useState();
  const [highwaymanImage, setHighwaymanImage] = useState();
  const [jasonImage, setJasonImage] = useState();
  const [jimmyImage, setJimmyImage] = useState();
  const [langtreeImage, setLangtreeImage] = useState();
  const [lornaImage, setLornaImage] = useState();
  const [northwindImage, setNorthwindImage] = useState();
  const [saraImage, setSaraImage] = useState();
  const [whispersImage, setWhispersImage] = useState();
  const [wirtImage, setWirtImage] = useState();
  const [woodsmanImage, setWoodsmanImage] = useState();

  const fetchImage = async (setState, url) => {
    const response = await fetch(url);
    const imageBlob = await response.blob();
    const imageBlobUrl = URL.createObjectURL(imageBlob);
    setState(imageBlobUrl);
  };

  useEffect(() => {
    fetchImage(setAdelaideImage, import.meta.env.VITE_ADELAIDE_URL);
    fetchImage(setBeastImage, import.meta.env.VITE_BEAST_URL);
    fetchImage(setBeatriceImage, import.meta.env.VITE_BEATRICE_URL);
    fetchImage(setEndicottImage, import.meta.env.VITE_ENDICOTT_URL);
    fetchImage(setEnochImage, import.meta.env.VITE_ENOCH_URL);
    fetchImage(setFrogImage, import.meta.env.VITE_FROG_URL);
    fetchImage(setGregImage, import.meta.env.VITE_GREG_URL);
    fetchImage(setGreyImage, import.meta.env.VITE_GREY_URL);
    fetchImage(setHighwaymanImage, import.meta.env.VITE_HIGHWAYMAN_URL);
    fetchImage(setJasonImage, import.meta.env.VITE_JASON_URL);
    fetchImage(setJimmyImage, import.meta.env.VITE_JIMMY_URL);
    fetchImage(setLangtreeImage, import.meta.env.VITE_LANGTREE_URL);
    fetchImage(setLornaImage, import.meta.env.VITE_LORNA_URL);
    fetchImage(setNorthwindImage, import.meta.env.VITE_NORTHWIND_URL);
    fetchImage(setSaraImage, import.meta.env.VITE_SARA_URL);
    fetchImage(setWhispersImage, import.meta.env.VITE_WHISPERS_URL);
    fetchImage(setWirtImage, import.meta.env.VITE_WIRT_URL);
    fetchImage(setWoodsmanImage, import.meta.env.VITE_WOODSMAN_URL);
  }, []);

  return (
    <>
      <div className="w-screen flex flex-col justify-center items-center">
        <h1>Adelaide</h1>
        <img src={adelaideImage} alt="" className="w-24 h-auto" />
        <h1>Beast</h1>
        <img src={beastImage} alt="" className="w-24 h-auto" />
        <h1>Beatrice</h1>
        <img src={beatriceImage} alt="" className="w-24 h-auto" />{" "}
        <h1>Endicott</h1>
        <img src={endicottImage} alt="" className="w-24 h-auto" />
        <h1>Enoch</h1>
        <img src={enochImage} alt="" className="w-24 h-auto" />{" "}
        <h1>George Washington</h1>
        <img src={frogImage} alt="" className="w-24 h-auto" /> <h1>Greg</h1>
        <img src={gregImage} alt="" className="w-24 h-auto" /> <h1>Grey</h1>
        <img src={greyImage} alt="" className="w-24 h-auto" />{" "}
        <h1>Highwayman</h1>
        <img src={highwaymanImage} alt="" className="w-24 h-auto" />{" "}
        <h1>Jason Funderberker</h1>
        <img src={jasonImage} alt="" className="w-24 h-auto" />{" "}
        <h1>Jimmy Brown</h1>
        <img src={jimmyImage} alt="" className="w-24 h-auto" />{" "}
        <h1>Miss Langtree</h1>
        <img src={langtreeImage} alt="" className="w-24 h-auto" />{" "}
        <h1>Lorna</h1>
        <img src={lornaImage} alt="" className="w-24 h-auto" />{" "}
        <h1>North Wind</h1>
        <img src={northwindImage} alt="" className="w-24 h-auto" />{" "}
        <h1>Sara</h1>
        <img src={saraImage} alt="" className="w-24 h-auto" />{" "}
        <h1>Auntie Whispers</h1>
        <img src={whispersImage} alt="" className="w-24 h-auto" /> <h1>Wirt</h1>
        <img src={wirtImage} alt="" className="w-24 h-auto" /> <h1>Woodsman</h1>
        <img src={woodsmanImage} alt="" className="w-24 h-auto" />
      </div>
    </>
  );
}
