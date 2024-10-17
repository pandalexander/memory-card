import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ImageFetcher from "./ImageFetcher";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ImageFetcher></ImageFetcher>
  </StrictMode>
);
