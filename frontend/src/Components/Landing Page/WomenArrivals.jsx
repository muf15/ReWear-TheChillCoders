import React, { useState, useEffect, useRef } from 'react';

const WomenNewArrivals = () => {
  const scrollContainerRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Asymmetric Denim Skirt",
      price: "$138.00",
      brand: "Future Classics",
      image: "/api/placeholder/300/400",
      colors: ["blue"],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 2,
      name: "Asymmetric Denim Skirt Sand",
      price: "$138.00",
      brand: "Future Classics",
      image: "/api/placeholder/300/400",
      colors: ["beige"],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 3,
      name: "Asymmetric Slit Dress",
      price: "$188.00",
      brand: "Future Classics",
      image: "/api/placeholder/300/400",
      colors: ["sage", "pink"],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 4,
      name: "Back Slit Shirt",
      price: "$138.00",
      brand: "Future Classics",
      image: "/api/placeholder/300/400",
      colors: ["sage", "lavender"],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 5,
      name: "Back Slit Shirt White",
      price: "$138.00",
      brand: "Future Classics",
      image: "/api/placeholder/300/400",
      colors: ["white"],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 6,
      name: "Asymmetric Denim Skirt",
      price: "$138.00",
      brand: "Future Classics",
      image: "/api/placeholder/300/400",
      colors: ["blue"],
      sizes: ["XS", "S", "M", "L"]
    }
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 2;
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  const handleManualScroll = () => {
    // Manual scroll handling can be added here if needed
  };

  const ProductCard = ({ product }) => (
    <div className="flex-shrink-0 w-80 bg-white rounded-lg overflow-hidden">
      <div className="relative">
        <span className="absolute top-3 left-3 text-xs text-gray-500 bg-white px-2 py-1 rounded">
          New arrival
        </span>
        <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
          {product.id === 1 && (
            <div className="w-48 h-80 bg-blue-300 rounded-lg transform rotate-12 relative">
              <div className="absolute inset-4 bg-blue-400 rounded-lg"></div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-blue-500 rounded-b-lg"></div>
            </div>
          )}
          {product.id === 2 && (
            <div className="w-48 h-80 bg-stone-300 rounded-lg transform -rotate-6 relative">
              <div className="absolute inset-4 bg-stone-400 rounded-lg"></div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-stone-500 rounded-b-lg"></div>
            </div>
          )}
          {product.id === 3 && (
            <div className="w-40 h-80 bg-green-200 rounded-lg relative">
              <div className="absolute inset-4 bg-green-300 rounded-lg"></div>
              <div className="absolute bottom-8 left-0 right-0 h-32 bg-green-300 rounded-b-lg"></div>
            </div>
          )}
          {product.id === 4 && (
            <div className="w-48 h-72 bg-green-200 rounded-lg relative">
              <div className="absolute top-0 left-0 w-12 h-12 bg-green-300 rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-12 h-12 bg-green-300 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-green-300 rounded-b-lg"></div>
            </div>
          )}
          {product.id === 5 && (
            <div className="w-48 h-72 bg-gray-50 border-2 border-gray-200 rounded-lg relative">
              <div className="absolute top-0 left-0 w-12 h-12 bg-gray-100 rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-12 h-12 bg-gray-100 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-gray-100 rounded-b-lg"></div>
            </div>
          )}
          {product.id === 6 && (
            <div className="w-48 h-80 bg-blue-300 rounded-lg transform rotate-12 relative">
              <div className="absolute inset-4 bg-blue-400 rounded-lg"></div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-blue-500 rounded-b-lg"></div>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        <h3 className="text-base font-medium text-gray-900 mb-2">{product.name}</h3>
        <p className="text-base font-medium text-gray-900 mb-3">{product.price}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {product.colors.map((color, index) => (
              <div key={index} className="w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center">
                <div className={`w-4 h-4 rounded-full ${
                  color === 'blue' ? 'bg-blue-400' :
                  color === 'beige' ? 'bg-stone-400' :
                  color === 'sage' ? 'bg-green-300' :
                  color === 'pink' ? 'bg-pink-300' :
                  color === 'lavender' ? 'bg-purple-300' :
                  color === 'white' ? 'bg-white border border-gray-300' :
                  'bg-gray-400'
                }`}></div>
              </div>
            ))}
          </div>
          
          <div className="flex space-x-2 text-sm text-gray-600">
            {product.sizes.map((size, index) => (
              <span key={index}>{size}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="text-center">
            <h1 className="text-2xl font-medium text-gray-900">Women New Arrivals</h1>
            <button className="text-sm text-gray-600 hover:text-gray-900 mt-1">
              View all
            </button>
          </div>
          
          <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide"
        >
          <div className="flex space-x-6 pb-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default WomenNewArrivals;