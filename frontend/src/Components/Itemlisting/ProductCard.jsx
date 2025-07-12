import React from "react";

export default function ProductCard({
  image,
  title = "Clothing",
  label = "New arrival",
  onClick,
  favorite = false
}) {
  return (
    <div className="relative bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 p-4 flex flex-col items-center group">
      {/* Label */}
      {label && (
        <span className="absolute top-4 left-4 bg-white text-gray-700 text-xs font-medium px-2 py-1 rounded shadow-sm">
          {label}
        </span>
      )}
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-contain mb-4 rounded"
        style={{ background: "#f7f7f7" }}
      />
      {/* Title */}
      <div className="text-center text-sm text-gray-700 mt-auto mb-2">{title}</div>
      {/* Favorite Button */}
      <button
        className={`absolute left-4 bottom-4 w-10 h-10 rounded-full flex items-center justify-center shadow-md bg-gray-200 hover:bg-pink-200 transition-colors ${favorite ? 'text-pink-600' : 'text-gray-700'}`}
        onClick={onClick}
        aria-label="Favorite"
      >
        <svg width="22" height="22" fill={favorite ? '#ec4899' : 'none'} stroke={favorite ? '#ec4899' : '#222'} strokeWidth="2">
          <path d="M11 19l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-7.55 9.18L11 19z" />
        </svg>
      </button>
    </div>
  );
}
