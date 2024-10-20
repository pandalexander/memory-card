import ImageFetcher from "./Containers/ImageFetcher";
import "./App.css";

function App() {
  return (
    <>
      {/* <div className="w-auto flex flex-col justify-center items-center">
        <ul className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <ImageFetcher></ImageFetcher>
        </ul>
      </div> */}
      <div className="grid-container">
        <ImageFetcher></ImageFetcher>
      </div>
    </>
  );
}

export default App;
