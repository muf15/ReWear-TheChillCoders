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
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 2,
      name: "Textured Striped Blazer",
      price: "$248.00",
      brand: "Future Classics",
      colors: ["white", "cream"],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 3,
      name: "Seashell Denim Top",
      price: "$138.00",
      brand: "Future Classics",
      colors: ["blue"],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 4,
      name: "Asymmetric Denim Skirt",
      price: "$138.00",
      brand: "Future Classics",
      colors: ["blue"],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 5,
      name: "Oversized Linen Shirt",
      price: "$165.00",
      brand: "Future Classics",
      colors: ["white", "beige"],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 6,
      name: "Pleated Midi Dress",
      price: "$195.00",
      brand: "Future Classics",
      colors: ["sage", "navy"],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 7,
      name: "Wide-leg Palazzo Pants",
      price: "$148.00",
      brand: "Future Classics",
      colors: ["black", "cream"],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 8,
      name: "Cropped Tweed Jacket",
      price: "$275.00",
      brand: "Future Classics",
      colors: ["tweed", "navy"],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 9,
      name: "Ribbed Knit Cardigan",
      price: "$125.00",
      brand: "Future Classics",
      colors: ["cream", "sage"],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 10,
      name: "High-waist Culottes",
      price: "$155.00",
      brand: "Future Classics",
      colors: ["navy", "brown"],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 11,
      name: "Silk Camisole Top",
      price: "$98.00",
      brand: "Future Classics",
      colors: ["ivory", "blush"],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 12,
      name: "Structured Blazer Dress",
      price: "$225.00",
      brand: "Future Classics",
      colors: ["black", "navy"],
      sizes: ["XS", "S", "M", "L"]
    }
  ];

  const pages = [];
  for (let i = 0; i < products.length; i += 12) {
    pages.push(products.slice(i, i + 12));
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
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 group">
      <div className="relative">
        <span className="absolute top-3 left-3 text-xs text-gray-500 bg-white px-2 py-1 rounded-full shadow-sm z-10">
          New arrival
        </span>
        <div className="w-full aspect-[3/4] bg-gray-50 flex items-center justify-center overflow-hidden">
          {/* Product 1 - Trousers */}
          {product.id === 1 && (
            <div className="w-32 h-64 bg-stone-400 relative transform group-hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-x-4 top-8 bottom-8 bg-stone-300 rounded-t-lg"></div>
              <div className="absolute inset-x-4 top-24 h-px bg-stone-500"></div>
              <div className="absolute left-1/2 top-24 w-px h-32 bg-stone-500 transform -translate-x-1/2"></div>
            </div>
          )}
          
          {/* Product 2 - Blazer */}
          {product.id === 2 && (
            <div className="w-36 h-56 bg-gray-50 border-2 border-gray-200 relative transform group-hover:scale-105 transition-transform duration-300">
              <div className="absolute top-4 left-4 right-4 h-8 bg-gray-100 rounded-t-lg"></div>
              <div className="absolute top-12 left-6 w-6 h-6 bg-gray-200 rounded-full"></div>
              <div className="absolute top-20 left-4 right-4 h-4 bg-gray-100"></div>
              <div className="absolute bottom-4 left-4 right-4 h-6 bg-gray-100 rounded-b-lg"></div>
            </div>
          )}
          
          {/* Product 3 - Denim Top */}
          {product.id === 3 && (
            <div className="w-32 h-48 bg-blue-400 relative transform group-hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-2 bg-blue-300 rounded-lg"></div>
              <div className="absolute bottom-8 left-2 right-2 h-16 bg-blue-500 rounded-b-lg"></div>
              <div className="absolute inset-2 bg-blue-200 bg-opacity-30 rounded-lg"></div>
              <div className="absolute inset-4 border-2 border-blue-200 rounded-lg border-dashed"></div>
            </div>
          )}
          
          {/* Additional products with varied designs */}
          {product.id === 4 && (
            <div className="w-28 h-56 bg-blue-300 relative transform rotate-12 group-hover:rotate-6 group-hover:scale-105 transition-all duration-300">
              <div className="absolute inset-2 bg-blue-400 rounded-lg"></div>
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-blue-500 rounded-b-lg"></div>
            </div>
          )}
          
          {product.id === 5 && (
            <div className="w-40 h-52 bg-gray-50 border border-gray-200 relative transform group-hover:scale-105 transition-transform duration-300">
              <div className="absolute top-2 left-2 right-2 h-12 bg-gray-100 rounded-t-lg"></div>
              <div className="absolute top-6 left-4 right-4 h-2 bg-gray-200"></div>
            </div>
          )}
          
          {product.id === 6 && (
            <div className="w-32 h-60 bg-green-200 relative transform group-hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-2 bg-green-300 rounded-lg"></div>
              <div className="absolute bottom-4 left-2 right-2 h-20 bg-green-400 rounded-b-lg"></div>
              <div className="absolute inset-x-6 top-8 bottom-24 bg-green-100"></div>
            </div>
          )}
          
          {[7, 8, 9, 10, 11, 12].includes(product.id) && (
            <div className={`w-32 h-56 relative transform group-hover:scale-105 transition-transform duration-300 ${
              product.id === 7 ? 'bg-gray-800' :
              product.id === 8 ? 'bg-amber-100 border-2 border-amber-200' :
              product.id === 9 ? 'bg-stone-200' :
              product.id === 10 ? 'bg-blue-900' :
              product.id === 11 ? 'bg-pink-50 border border-pink-200' :
              'bg-gray-900'
            }`}>
              <div className={`absolute inset-2 rounded-lg ${
                product.id === 7 ? 'bg-gray-700' :
                product.id === 8 ? 'bg-amber-50' :
                product.id === 9 ? 'bg-stone-100' :
                product.id === 10 ? 'bg-blue-800' :
                product.id === 11 ? 'bg-pink-100' :
                'bg-gray-800'
              }`}></div>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        <h3 className="text-sm font-medium text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm font-medium text-gray-900 mb-3">{product.price}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-1">
            {product.colors.map((color, index) => (
              <div key={index} className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center">
                <div className={`w-3 h-3 rounded-full ${
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
          
          <div className="flex space-x-1 text-xs text-gray-500">
            {product.sizes.map((size, index) => (
              <span key={index} className="px-1">{size}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={handlePrevious}
            className="p-3 rounded-full hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50"
            disabled={pages.length <= 1}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="text-center">
            <h1 className="text-3xl font-light text-gray-900 mb-2">Women New Arrivals</h1>
            <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
              View all
            </button>
          </div>
          
          <button 
            onClick={handleNext}
            className="p-3 rounded-full hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50"
            disabled={pages.length <= 1}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            
          >
            {pages.map((page, pageIndex) => (
              <div key={pageIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {page.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {pages.length > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoScrolling(false);
                  setCurrentPage(index);
                  setTimeout(() => setIsAutoScrolling(true), 3000);
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentPage ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
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