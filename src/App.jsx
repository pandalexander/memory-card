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
      <h1 className="text-center my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Over The Garden Wall Memory Card Game
      </h1>
      <div className="grid-container">
        <ImageFetcher></ImageFetcher>
      </div>
    </>
  );
}

export default App;
