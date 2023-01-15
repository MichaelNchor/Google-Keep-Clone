import React from "react";

function Card(props) {
  return (
    <div className="w-64 h-[500px] border-2 shadow-gray-600 rounded-xl m-3 p-3 relative hover:shadow-lg hover:shadow-gray-600">
      <button
        type="button"
        className="rounded-full absolute top-[-12px] left-[-10px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <h1 className="font-bold">{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
}

export default Card;
