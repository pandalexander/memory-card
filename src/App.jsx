import ImageFetcher from "./Containers/ImageFetcher";
import "./App.css";

function App() {
  return (
    <>
      <div className="w-screen flex flex-col justify-center items-center">
        <ul className="grid grid-cols-4 gap-6">
          <ImageFetcher></ImageFetcher>
        </ul>
      </div>
    </>
  );
}

export default App;
