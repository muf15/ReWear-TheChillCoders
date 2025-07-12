import React from "react";
import ProductCard from "../Components/Itemlisting/ProductCard";

const products = [
  {
    id: 1,
    image: "https://cdn.onsclothing.com/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/o/n/ons_clothing_lightblue_shirt.jpg",
    title: " Light Blue Shirt",
    label: "New arrival",
    favorite: true
  },
  {
    id: 2,
    image: "https://cdn.onsclothing.com/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/o/n/ons_clothing_grey_shirt.jpg",
    title: " Grey Shirt",
    label: "New arrival",
    favorite: false
  },
  {
    id: 3,
    image: "https://cdn.onsclothing.com/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/o/n/ons_clothing_navy_shirt.jpg",
    title: " Navy Shirt",
    label: "New arrival",
    favorite: false
  },
  {
    id: 4,
    image: "https://cdn.onsclothing.com/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/o/n/ons_clothing_white_shirt.jpg",
    title: " White Shirt",
    label: "New arrival",
    favorite: false
  },
  {
    id: 5,
    image: "https://cdn.onsclothing.com/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/o/n/ons_clothing_black_shirt.jpg",
    title: " Black Shirt",
    label: "New arrival",
    favorite: false
  },
  {
    id: 6,
    image: "https://cdn.onsclothing.com/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/o/n/ons_clothing_green_shirt.jpg",
    title: " Green Shirt",
    label: "New arrival",
    favorite: false
  },
  {
    id: 7,
    image: "https://cdn.onsclothing.com/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/o/n/ons_clothing_red_shirt.jpg",
    title: " Red Shirt",
    label: "New arrival",
    favorite: false
  },
  {
    id: 8,
    image: "https://cdn.onsclothing.com/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/o/n/ons_clothing_yellow_shirt.jpg",
    title: " Yellow Shirt",
    label: "New arrival",
    favorite: false
  },
  {
    id: 9,
    image: "https://cdn.onsclothing.com/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/o/n/ons_clothing_purple_shirt.jpg",
    title: " Purple Shirt",
    label: "New arrival",
    favorite: false
  },
  {
    id: 10,
    image: "https://cdn.onsclothing.com/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/o/n/ons_clothing_orange_shirt.jpg",
    title: " Orange Shirt",
    label: "New arrival",
    favorite: false
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-pink-50 py-8 px-4 md:px-12">
      <div className="flex items-center justify-between mb-8">
        <div className="text-lg font-semibold flex items-center gap-2">
          <svg width="22" height="22" fill="none" stroke="#ec4899" strokeWidth="2" className="inline-block mr-1">
            <path d="M4 11h16M4 11a7 7 0 0 1 14 0M4 11a7 7 0 0 0 14 0" />
          </svg>
          Filter
        </div>
        <div className="text-base font-medium text-gray-700">Alphabetically, A-Z</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
