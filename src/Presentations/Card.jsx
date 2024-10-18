// Big Picture explanation: This pr

export default function Card({ name, displayName, source }) {
  Card.propTypes = {
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  };

  return (
    <>
      <li key={name} className="flex flex-col justify-start items-center">
        <div className=" p-4 rounded-2xl bg-amber-700 flex flex-col items-center justify-start">
          <h2 className="text-xl text-center">{displayName}</h2>
          <div className="flex items-end justify-center w-40 h-48">
            <img
              src={source}
              alt={displayName}
              className="max-h-full max-w-full object-contain rounded-md"
            />
          </div>
        </div>
      </li>
    </>
  );
}
