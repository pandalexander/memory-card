import { useEffect, useState } from "react";
import Card from "../Presentations/Card";

// Create IMAGES array to house names and api url locations of images to fetch. URLs can be found in local .env file.
const IMAGES = [
  {
    name: "adelaide",
    url: import.meta.env.VITE_ADELAIDE_URL,
    displayName: "Adelaide",
  },
  {
    name: "beast",
    url: import.meta.env.VITE_BEAST_URL,
    displayName: "The Beast",
  },
  {
    name: "beatrice",
    url: import.meta.env.VITE_BEATRICE_URL,
    displayName: "Beatrice",
  },
  {
    name: "endicott",
    url: import.meta.env.VITE_ENDICOTT_URL,
    displayName: "Quincy Endicott",
  },
  {
    name: "enoch",
    url: import.meta.env.VITE_ENOCH_URL,
    displayName: "Enoch",
  },
  {
    name: "frog",
    url: import.meta.env.VITE_FROG_URL,
    displayName: "George Washington",
  },
  {
    name: "greg",
    url: import.meta.env.VITE_GREG_URL,
    displayName: "Greg",
  },
  {
    name: "grey",
    url: import.meta.env.VITE_GREY_URL,
    displayName: "Margueritte Grey",
  },
  {
    name: "highwayman",
    url: import.meta.env.VITE_HIGHWAYMAN_URL,
    displayName: "The Highwayman",
  },
  {
    name: "jason",
    url: import.meta.env.VITE_JASON_URL,
    displayName: "Jason Funderberker",
  },
  {
    name: "jimmy",
    url: import.meta.env.VITE_JIMMY_URL,
    displayName: "Jimmy Brown",
  },
  {
    name: "langtree",
    url: import.meta.env.VITE_LANGTREE_URL,
    displayName: "Miss Langtree",
  },
  {
    name: "lorna",
    url: import.meta.env.VITE_LORNA_URL,
    displayName: "Lorna",
  },
  {
    name: "northwind",
    url: import.meta.env.VITE_NORTHWIND_URL,
    displayName: "Old North Wind",
  },
  {
    name: "sara",
    url: import.meta.env.VITE_SARA_URL,
    displayName: "Sara",
  },
  {
    name: "whispers",
    url: import.meta.env.VITE_WHISPERS_URL,
    displayName: "Auntie Whispers",
  },
  {
    name: "wirt",
    url: import.meta.env.VITE_WIRT_URL,
    displayName: "Wirt",
  },
  {
    name: "woodsman",
    url: import.meta.env.VITE_WOODSMAN_URL,
    displayName: "The Woodsman",
  },
];

// Declare function that will fetch images from api
export default function ImageFetcher() {
  // Declare the state object that will house all images with the format {name: name, blobURL: blobURL}
  const [images, setImages] = useState({});

  // Run  useEffect on mount and every time 'images' changes -> this is to stay in sync with the api that is giving us the images we are using.

  useEffect(() => {
    // Asynchronously map over each entry in the IMAGES object above, creating promises for each to fetch the desired content from the url. Set up the promise to return an array [name, blobURL]

    const fetchImages = async () => {
      const promiseArray = IMAGES.map(async (item) => {
        try {
          const response = await fetch(item.url);

          if (!response.ok) {
            console.error(
              `Couldn't fetch ${item.name} image! Status code:`,
              response.status
            );
            return [item.name, null];
          }
          const blob = await response.blob();
          const blobUrl = URL.createObjectURL(blob);
          return [item.name, blobUrl];
        } catch (error) {
          console.error(
            `Something went wrong with ${item.name}'s image! Error:` + error
          );
          return [item.name, null];
        }
      });

      // call Promise.all on fetchPromises promise array
      const results = await Promise.all(promiseArray);

      const newObj = {};

      results.forEach((item) => {
        newObj[item[0]] = item[1];
      });

      setImages(newObj);

      return () => results.map(URL.revokeObjectURL);
    };

    fetchImages();
  }, []);

  return (
    <>
      <div className="w-screen flex flex-col justify-center items-center">
        <ul className="grid grid-cols-4 gap-6">
          {IMAGES.map(({ name, displayName }) => {
            return (
              <Card
                key={name}
                name={name}
                displayName={displayName}
                source={images[name]}
              ></Card>
            );
          })}
        </ul>
      </div>
    </>
  );
}
