import React, { useState, useEffect } from 'react';
import { User, Package, ShoppingBag, Heart, Star, Eye, Edit, Trash2, Plus, Search, Filter, MessageCircle, Share2, Calendar, DollarSign, TrendingUp, Award } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [userProfile, setUserProfile] = useState({});
  const [userListings, setUserListings] = useState([]);
  const [userPurchases, setUserPurchases] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [stats, setStats] = useState({});

  // Dummy user profile data
  const dummyProfile = {
    id: 1,
    name: "Crafty Chinchilla",
    email: "crafty.chinchilla@example.com",
    bio: "Passionate crafter and seller of handmade items. Creating unique pieces with love and creativity for over 5 years.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
    location: "San Francisco, CA",
    joinDate: "2019-03-15",
    rating: 4.8,
    totalSales: 156,
    followers: 1250,
    following: 89,
    isVerified: true,
    skills: ["Handcrafted Jewelry", "Pottery", "Textile Art", "Wood Carving"],
    socialLinks: {
      instagram: "@crafty_chinchilla",
      etsy: "CraftyChinchillaShop"
    }
  };

  // Dummy user listings data
  const dummyListings = [
    {
      id: 301,
      title: "Handmade Ceramic Vase Set",
      price: 89.99,
      category: "Home Decor",
      status: "Active",
      views: 245,
      likes: 18,
      stock: 3,
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=300&h=300&fit=crop",
      dateAdded: "2024-06-15",
      description: "Beautiful handcrafted ceramic vase set perfect for home decoration",
      tags: ["ceramic", "handmade", "home decor", "vase"]
    },
    {
      id: 302,
      title: "Macrame Wall Hanging",
      price: 45.99,
      category: "Wall Art",
      status: "Active",
      views: 189,
      likes: 24,
      stock: 5,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
      dateAdded: "2024-06-20",
      description: "Elegant macrame wall hanging made with natural cotton rope",
      tags: ["macrame", "wall art", "cotton", "boho"]
    },
    {
      id: 303,
      title: "Wooden Jewelry Box",
      price: 124.99,
      category: "Storage",
      status: "Sold",
      views: 156,
      likes: 31,
      stock: 0,
      image: "https://images.unsplash.com/photo-1564004717943-d03fb6747d3c?w=300&h=300&fit=crop",
      dateAdded: "2024-05-10",
      description: "Handcrafted wooden jewelry box with velvet interior",
      tags: ["wood", "jewelry", "storage", "handcrafted"]
    },
    {
      id: 304,
      title: "Knitted Wool Scarf",
      price: 32.99,
      category: "Fashion",
      status: "Active",
      views: 98,
      likes: 12,
      stock: 8,
      image: "https://images.unsplash.com/photo-1601924287866-3cee7de9ee13?w=300&h=300&fit=crop",
      dateAdded: "2024-07-01",
      description: "Cozy hand-knitted wool scarf in multiple colors",
      tags: ["knitted", "wool", "scarf", "fashion"]
    }
  ];

  // Dummy user purchases data
  const dummyPurchases = [
    {
      id: 2001,
      title: "Vintage Leather Journal",
      price: 35.99,
      seller: "BookCrafters",
      sellerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      status: "Delivered",
      orderDate: "2024-06-25",
      deliveryDate: "2024-06-28",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop",
      rating: 5,
      review: "Amazing quality! Exactly as described."
    },
    {
      id: 2002,
      title: "Handmade Soap Collection",
      price: 24.99,
      seller: "Natural Soaps Co",
      sellerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      status: "Shipped",
      orderDate: "2024-07-08",
      deliveryDate: "2024-07-15",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
      rating: null,
      review: null
    },
    {
      id: 2003,
      title: "Artisan Coffee Mug",
      price: 18.99,
      seller: "Clay Creations",
      sellerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      status: "Processing",
      orderDate: "2024-07-10",
      deliveryDate: "2024-07-18",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop",
      rating: null,
      review: null
    },
    {
      id: 2004,
      title: "Embroidered Tote Bag",
      price: 42.99,
      seller: "Textile Arts Studio",
      sellerAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      status: "Delivered",
      orderDate: "2024-06-15",
      deliveryDate: "2024-06-20",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      rating: 4,
      review: "Beautiful work, very satisfied!"
    }
  ];

  const dummyStats = {
    totalEarnings: 2845.67,
    monthlyEarnings: 456.89,
    totalViews: 12450,
    monthlyViews: 1890,
    conversionRate: 3.2,
    averageRating: 4.8
  };

  useEffect(() => {
    setUserProfile(dummyProfile);
    setUserListings(dummyListings);
    setUserPurchases(dummyPurchases);
    setStats(dummyStats);
  }, []);

  // API functions for backend integration
  const fetchUserProfile = async () => {
    try {
      // const response = await fetch('/api/user/profile');
      // const data = await response.json();
      // setUserProfile(data);
      console.log('Fetching user profile from API...');
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const fetchUserListings = async () => {
    try {
      // const response = await fetch('/api/user/listings');
      // const data = await response.json();
      // setUserListings(data);
      console.log('Fetching user listings from API...');
    } catch (error) {
      console.error('Error fetching user listings:', error);
    }
  };

  const fetchUserPurchases = async () => {
    try {
      // const response = await fetch('/api/user/purchases');
      // const data = await response.json();
      // setUserPurchases(data);
      console.log('Fetching user purchases from API...');
    } catch (error) {
      console.error('Error fetching user purchases:', error);
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'sold':
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'inactive':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-pink-50">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img 
                src={userProfile.avatar} 
                alt={userProfile.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-pink-100"
              />
              {userProfile.isVerified && (
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Award className="text-white" size={16} />
                </div>
              )}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">{userProfile.name}</h1>
              <p className="text-pink-600 font-medium">{userProfile.email}</p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  {renderStars(Math.floor(userProfile.rating))}
                  <span className="text-sm text-gray-600 ml-1">({userProfile.rating})</span>
                </div>
                <span className="text-sm text-gray-500">{userProfile.location}</span>
                <span className="text-sm text-gray-500">Joined {userProfile.joinDate}</span>
              </div>
              <p className="text-gray-600 mt-3 max-w-2xl">{userProfile.bio}</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-200">
            Edit Profile
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mt-8 pt-6 border-t border-pink-50">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{userProfile.totalSales}</div>
            <div className="text-sm text-gray-500">Total Sales</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{userProfile.followers}</div>
            <div className="text-sm text-gray-500">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{userProfile.following}</div>
            <div className="text-sm text-gray-500">Following</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{userProfile.rating}</div>
            <div className="text-sm text-gray-500">Rating</div>
          </div>
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Earnings</p>
              <p className="text-2xl font-bold text-gray-900">${stats.totalEarnings}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <DollarSign className="text-green-600" size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Views</p>
              <p className="text-2xl font-bold text-gray-900">{stats.monthlyViews}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Eye className="text-blue-600" size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900">{stats.conversionRate}%</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <TrendingUp className="text-purple-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills & Specialties</h3>
        <div className="flex flex-wrap gap-2">
          {userProfile.skills?.map((skill, index) => (
            <span
              key={index}
              className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderListings = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {userListings.map(listing => (
        <div key={listing.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-pink-50 hover:shadow-md transition-all duration-300">
          <div className="relative">
            <img 
              src={listing.image} 
              alt={listing.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-3 right-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(listing.status)}`}>
                {listing.status}
              </span>
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{listing.title}</h3>
            <p className="text-pink-600 font-bold text-lg mb-2">${listing.price}</p>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{listing.description}</p>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Eye size={14} />
                  <span>{listing.views}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart size={14} />
                  <span>{listing.likes}</span>
                </div>
              </div>
              <span className="text-sm text-gray-500">Stock: {listing.stock}</span>
            </div>
            
            <div className="flex flex-wrap gap-1 mb-4">
              {listing.tags.slice(0, 2).map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="flex-1 bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors text-sm">
                Edit
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                <Share2 size={16} />
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderPurchases = () => (
    <div className="space-y-4">
      {userPurchases.map(purchase => (
        <div key={purchase.id} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50 hover:shadow-md transition-all duration-300">
          <div className="flex items-center space-x-4">
            <img 
              src={purchase.image} 
              alt={purchase.title}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-lg">{purchase.title}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <img 
                  src={purchase.sellerAvatar} 
                  alt={purchase.seller}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-pink-600 font-medium">{purchase.seller}</span>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <span className="text-sm text-gray-500">Ordered: {purchase.orderDate}</span>
                <span className="text-sm text-gray-500">Expected: {purchase.deliveryDate}</span>
              </div>
              {purchase.rating && (
                <div className="flex items-center space-x-2 mt-2">
                  <div className="flex items-center space-x-1">
                    {renderStars(purchase.rating)}
                  </div>
                  <span className="text-sm text-gray-600">"{purchase.review}"</span>
                </div>
              )}
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-gray-900">${purchase.price}</p>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(purchase.status)}`}>
                {purchase.status}
              </span>
              <div className="flex items-center space-x-2 mt-3">
                <button className="p-2 text-pink-600 hover:bg-pink-50 rounded-lg transition-colors">
                  <MessageCircle size={16} />
                </button>
                <button className="p-2 text-pink-600 hover:bg-pink-50 rounded-lg transition-colors">
                  <Eye size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-25 to-pink-50" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center">
                <User className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Crafty Chinchilla</h1>
                <p className="text-sm text-gray-600">Welcome back to your dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400" size={18} />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                />
              </div>
              <button className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-200">
                <Plus size={18} />
                <span>Add Listing</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-1">
            {[
              { id: 'overview', label: 'Overview', icon: User },
              { id: 'listings', label: 'My Listings', icon: Package, count: userListings.length },
              { id: 'purchases', label: 'My Purchases', icon: ShoppingBag, count: userPurchases.length }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-200 border-b-2 ${
                  activeTab === tab.id
                    ? 'border-pink-500 text-pink-600 bg-pink-50'
                    : 'border-transparent text-gray-600 hover:text-pink-600 hover:bg-pink-25'
                }`}
              >
                <tab.icon size={20} />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className="bg-pink-100 text-pink-600 text-xs font-semibold px-2 py-1 rounded-full">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'listings' && renderListings()}
        {activeTab === 'purchases' && renderPurchases()}
      </div>
    </div>
  );
};

export default Dashboard;