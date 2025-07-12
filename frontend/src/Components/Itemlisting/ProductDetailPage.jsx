import React, { useState } from 'react';
import { Heart, Share2, Star, MapPin, Clock, Leaf, Users, ArrowLeft, MessageCircle } from 'lucide-react';

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const productImages = [
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop",
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop",
    "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&h=600&fit=crop",
    "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=600&fit=crop"
  ];

  const similarItems = [
    {
      id: 1,
      name: "Vintage Denim Jacket",
      points: 45,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&h=250&fit=crop",
      owner: "Sarah M."
    },
    {
      id: 2,
      name: "Floral Summer Dress",
      points: 35,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=250&fit=crop",
      owner: "Emma L."
    },
    {
      id: 3,
      name: "Leather Ankle Boots",
      points: 60,
      image: "https://images.unsplash.com/photo-1608256246200-53e8b6d13c70?w=200&h=250&fit=crop",
      owner: "Lisa K."
    },
    {
      id: 4,
      name: "Cozy Knit Sweater",
      points: 40,
      image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=200&h=250&fit=crop",
      owner: "Maya P."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ReWear
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-full transition-colors ${isLiked ? 'bg-red-100 text-red-500' : 'hover:bg-gray-100 text-gray-600'}`}
            >
              <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Share2 className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images Section */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src={productImages[selectedImage]} 
                alt="Product main view"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                <Leaf className="w-4 h-4 inline mr-1" />
                Eco-Friendly
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden transition-all ${
                    selectedImage === index 
                      ? 'ring-3 ring-purple-500 shadow-lg' 
                      : 'hover:shadow-md opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            {/* Product Title & Rating */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Designer Silk Blouse
              </h2>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600">4.9 (24 reviews)</span>
                </div>
                <span className="text-2xl font-bold text-purple-600">35 Points</span>
              </div>
            </div>

            {/* Owner Info */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  E
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Imaginative Echidna</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    Mumbai, Maharashtra
                  </div>
                </div>
                <button className="ml-auto bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Chat
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Product Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Brand:</span>
                  <span className="font-medium text-gray-800">Zara</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Size:</span>
                  <span className="font-medium text-gray-800">Medium (M)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Condition:</span>
                  <span className="font-medium text-green-600">Like New</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Material:</span>
                  <span className="font-medium text-gray-800">100% Silk</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Color:</span>
                  <span className="font-medium text-gray-800">Dusty Rose</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                Beautiful designer silk blouse in pristine condition! This elegant piece features a classic cut with subtle shimmer details. Perfect for office wear or special occasions. The fabric is incredibly soft and drapes beautifully. I'm letting this go because I've moved to a warmer climate and don't need formal wear as much. 
              </p>
              <div className="mt-4 flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                Listed 2 days ago
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg">
                Swap for 35 Points
              </button>
              <button className="flex-1 bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-6 rounded-xl border-2 border-gray-200 transition-all">
                Propose Direct Swap
              </button>
            </div>

            {/* Environmental Impact */}
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold mb-3 text-green-800 flex items-center">
                <Leaf className="w-5 h-5 mr-2" />
                Environmental Impact
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">2,700L</div>
                  <div className="text-green-700">Water Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">5.4kg</div>
                  <div className="text-green-700">CO₂ Reduced</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Items Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Similar Items You Might Like</h2>
            <button className="text-purple-600 hover:text-purple-700 font-medium">
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarItems.map((item) => (
              <div key={item.id} className="bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all transform hover:scale-105 border border-white/20">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {item.owner}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600">{item.points} pts</span>
                    <button className="bg-purple-100 hover:bg-purple-200 text-purple-600 px-3 py-1 rounded-lg text-sm transition-colors">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;