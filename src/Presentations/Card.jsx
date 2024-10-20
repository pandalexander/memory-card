// Big Picture explanation: This presentation is a reusable Card component that takes props of name, display name, and source to return a styled card.

import PropTypes from "prop-types";

export default function Card({ name, displayName, source }) {
  Card.propTypes = {
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  };

  return (
    <>
      <li key={name} className="list-none">
        <div className="w-42 h-64 shadow-md overflow-hidden p-4 rounded-2xl bg-amber-700 flex flex-col">
          <div className="flex-grow overflow-y-auto mb-2">
            <h2 className="text-lg font-bold text-center">{displayName}</h2>
          </div>
          <div
            className="w-full flex-shrink min-h-0 overflow-hidden rounded-lg"
            style={{ flexBasis: "0%", flexGrow: 999 }}
          >
            <img
              src={source}
              alt={displayName}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </li>
    </>
  );
}
