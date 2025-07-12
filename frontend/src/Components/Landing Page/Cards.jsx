import { useState, useEffect, useRef } from 'react';
import React from 'react';

const Cards = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Tailor-detailed Trousers",
      price: "$138.00",
      brand: "Future Classics",
      colors: ["sage", "brown"],
      sizes: ["XS", "S", "M", "L"],
      imageUrl: "../src/assets/Womenarrival/women1.jpg"
    },
    {
      id: 2,
      name: "Textured Striped Blazer",
      price: "$248.00",
      brand: "Future Classics",
      colors: ["white", "cream"],
      sizes: ["XS", "S", "M", "L"],
      imageUrl: "../src/assets/Womenarrival/women2.jpg"
    },
    {
      id: 3,
      name: "Seashell Denim Top",
      price: "$138.00",
      brand: "Future Classics",
      colors: ["blue"],
      sizes: ["XS", "S", "M", "L"],
      imageUrl: "../src/assets/Womenarrival/women3.jpg"
    },
    {
      id: 4,
      name: "Asymmetric Denim Skirt",
      price: "$138.00",
      brand: "Future Classics",
      colors: ["blue"],
      sizes: ["XS", "S", "M", "L"],
      imageUrl: "../src/assets/Womenarrival/women4.jpg"
    },
    {
      id: 5,
      name: "Oversized Linen Shirt",
      price: "$165.00",
      brand: "Future Classics",
      colors: ["white", "beige"],
      sizes: ["XS", "S", "M", "L"],
      imageUrl: "../src/assets/Womenarrival/women5.jpg"
    },
    {
      id: 6,
      name: "Pleated Midi Dress",
      price: "$195.00",
      brand: "Future Classics",
      colors: ["sage", "navy"],
      sizes: ["XS", "S", "M", "L"],
      imageUrl: "../src/assets/Womenarrival/women6.jpg"
    },
    {
      id: 7,
      name: "Wide-leg Palazzo Pants",
      price: "$148.00",
      brand: "Future Classics",
      colors: ["black", "cream"],
      sizes: ["XS", "S", "M", "L"],
      imageUrl: "../src/assets/Womenarrival/women1.jpg"
    },
    {
      id: 8,
      name: "Cropped Tweed Jacket",
      price: "$275.00",
      brand: "Future Classics",
      colors: ["tweed", "navy"],
      sizes: ["XS", "S", "M", "L"],
      imageUrl: "../src/assets/Womenarrival/women1.jpg"
    },
    {
      id: 9,
      name: "Ribbed Knit Cardigan",
      price: "$125.00",
      brand: "Future Classics",
      colors: ["cream", "sage"],
      sizes: ["XS", "S", "M", "L"],
      imageUrl: "../src/assets/Womenarrival/women1.jpg"
    },
    {
      id: 10,
      name: "High-waist Culottes",
      price: "$155.00",
      brand: "Future Classics",
      colors: ["navy", "brown"],
      sizes: ["XS", "S", "M", "L"],
      imageUrl: "../src/assets/Womenarrival/women1.jpg"
    },
    {
      id: 11,
      name: "Silk Camisole Top",
      price: "$98.00",
      brand: "Future Classics",
      colors: ["ivory", "blush"],
      sizes: ["XS", "S", "M", "L"],
      imageUrl: "../src/assets/Womenarrival/women1.jpg"
    },
    {
      id: 12,
      name: "Structured Blazer Dress",
      price: "$225.00",
      brand: "Future Classics",
      colors: ["black", "navy"],
      sizes: ["XS", "S", "M", "L"],
      imageUrl: "../src/assets/Womenarrival/women1.jpg"
    }
  ];

  const pages = [];
  for (let i = 0; i < products.length; i += 6) {
    pages.push(products.slice(i, i + 6));
  }

  useEffect(() => {
    if (!isAutoScrolling) return;

    autoScrollRef.current = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % pages.length);
    }, 4000);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScrolling, pages.length]);

  const handlePrevious = () => {
    setIsAutoScrolling(false);
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const handleNext = () => {
    setIsAutoScrolling(false);
    setCurrentPage((prev) => (prev + 1) % pages.length);
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-pink-100">
      <div className="relative">
        <span className="absolute top-4 left-4 text-xs text-pink-600 bg-pink-50 px-3 py-1 rounded-full shadow-sm z-10 font-medium">
          New arrival
        </span>
        <div className="w-full aspect-[3/4] bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden w-full h-full bg-gradient-to-br from-pink-100 to-rose-100 items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-pink-500 font-medium">{product.name}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-sm text-pink-400 mb-1 font-medium">{product.brand}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">{product.name}</h3>
        <p className="text-xl font-bold text-pink-600 mb-4">{product.price}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {product.colors.map((color, index) => (
              <div key={index} className="w-6 h-6 rounded-full border-2 border-pink-100 flex items-center justify-center shadow-sm">
                <div className={`w-4 h-4 rounded-full ${
                  color === 'blue' ? 'bg-blue-400' :
                  color === 'beige' ? 'bg-stone-400' :
                  color === 'sage' ? 'bg-green-300' :
                  color === 'brown' ? 'bg-amber-700' :
                  color === 'white' ? 'bg-white border border-gray-300' :
                  color === 'cream' ? 'bg-amber-50 border border-amber-200' :
                  color === 'navy' ? 'bg-blue-900' :
                  color === 'black' ? 'bg-gray-900' :
                  color === 'tweed' ? 'bg-yellow-800' :
                  color === 'ivory' ? 'bg-yellow-50 border border-yellow-200' :
                  color === 'blush' ? 'bg-pink-200' :
                  'bg-gray-400'
                }`}></div>
              </div>
            ))}
          </div>
          
          <div className="flex space-x-2 text-sm text-pink-500">
            {product.sizes.map((size, index) => (
              <span key={index} className="px-2 py-1 bg-pink-50 rounded-lg font-medium">{size}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-25 via-rose-25 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-12">
          <button 
            onClick={handlePrevious}
            className="p-4 rounded-full bg-white hover:bg-pink-50 transition-all duration-300 disabled:opacity-50 shadow-lg border border-pink-100"
            disabled={pages.length <= 1}
          >
            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-3 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Women New Arrivals
            </h1>
            <button className="text-pink-600 hover:text-pink-700 transition-colors duration-200 font-medium underline decoration-pink-300 hover:decoration-pink-500">
              View all
            </button>
          </div>
          
          <button 
            onClick={handleNext}
            className="p-4 rounded-full bg-white hover:bg-pink-50 transition-all duration-300 disabled:opacity-50 shadow-lg border border-pink-100"
            disabled={pages.length <= 1}
          >
            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {pages.map((page, pageIndex) => (
              <div key={pageIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {page.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {pages.length > 1 && (
          <div className="flex justify-center mt-12 space-x-3">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoScrolling(false);
                  setCurrentPage(index);
                  setTimeout(() => setIsAutoScrolling(true), 3000);
                }}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentPage 
                    ? 'bg-pink-500 scale-110 shadow-lg' 
                    : 'bg-pink-200 hover:bg-pink-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;