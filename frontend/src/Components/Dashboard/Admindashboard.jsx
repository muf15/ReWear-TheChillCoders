import React, { useState, useEffect } from 'react';
import { Users, Package, ShoppingCart, Eye, Edit, Trash2, Plus, Search, Filter } from 'lucide-react';

const Admindashboard = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy data that matches typical backend API structure
  const dummyUsers = [
    {
      id: 1,
      name: "Meet Parmar",
      email: "meet.parmar@example.com",
      role: "Admin",
      status: "Active",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      joinDate: "2024-01-15",
      lastLogin: "2024-07-10"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      role: "Customer",
      status: "Active",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      joinDate: "2024-02-20",
      lastLogin: "2024-07-11"
    },
    {
      id: 3,
      name: "David Chen",
      email: "david.chen@example.com",
      role: "Customer",
      status: "Inactive",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      joinDate: "2024-03-10",
      lastLogin: "2024-06-15"
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      role: "Customer",
      status: "Active",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      joinDate: "2024-04-05",
      lastLogin: "2024-07-12"
    }
  ];

  const dummyOrders = [
    {
      id: 1001,
      customerName: "Meet Parmar",
      customerEmail: "meet.parmar@example.com",
      items: 3,
      total: 299.99,
      status: "Completed",
      date: "2024-07-10",
      shippingAddress: "123 Main St, New York, NY"
    },
    {
      id: 1002,
      customerName: "Sarah Johnson",
      customerEmail: "sarah.johnson@example.com",
      items: 1,
      total: 89.99,
      status: "Processing",
      date: "2024-07-11",
      shippingAddress: "456 Oak Ave, Los Angeles, CA"
    },
    {
      id: 1003,
      customerName: "David Chen",
      customerEmail: "david.chen@example.com",
      items: 2,
      total: 159.99,
      status: "Shipped",
      date: "2024-07-09",
      shippingAddress: "789 Pine Rd, Chicago, IL"
    },
    {
      id: 1004,
      customerName: "Emily Davis",
      customerEmail: "emily.davis@example.com",
      items: 4,
      total: 399.99,
      status: "Pending",
      date: "2024-07-12",
      shippingAddress: "321 Elm St, Houston, TX"
    }
  ];

  const dummyListings = [
    {
      id: 201,
      title: "Wireless Bluetooth Headphones",
      price: 89.99,
      category: "Electronics",
      status: "Active",
      stock: 25,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop",
      seller: "TechStore",
      dateAdded: "2024-06-15"
    },
    {
      id: 202,
      title: "Organic Cotton T-Shirt",
      price: 29.99,
      category: "Clothing",
      status: "Active",
      stock: 50,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=150&fit=crop",
      seller: "FashionHub",
      dateAdded: "2024-06-20"
    },
    {
      id: 203,
      title: "Ceramic Coffee Mug Set",
      price: 24.99,
      category: "Home & Kitchen",
      status: "Out of Stock",
      stock: 0,
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=150&h=150&fit=crop",
      seller: "HomeGoods",
      dateAdded: "2024-06-25"
    },
    {
      id: 204,
      title: "Leather Laptop Bag",
      price: 129.99,
      category: "Accessories",
      status: "Active",
      stock: 15,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop",
      seller: "LeatherCraft",
      dateAdded: "2024-07-01"
    }
  ];

  // Load dummy data on component mount
  useEffect(() => {
    setUsers(dummyUsers);
    setOrders(dummyOrders);
    setListings(dummyListings);
  }, []);

  // API functions (ready for backend integration)
  const fetchUsers = async () => {
    try {
      // const response = await fetch('/api/users');
      // const data = await response.json();
      // setUsers(data);
      console.log('Fetching users from API...');
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchOrders = async () => {
    try {
      // const response = await fetch('/api/orders');
      // const data = await response.json();
      // setOrders(data);
      console.log('Fetching orders from API...');
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const fetchListings = async () => {
    try {
      // const response = await fetch('/api/listings');
      // const data = await response.json();
      // setListings(data);
      console.log('Fetching listings from API...');
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  const handleEdit = (id, type) => {
    console.log(`Edit ${type} with ID: ${id}`);
  };

  const handleDelete = (id, type) => {
    console.log(`Delete ${type} with ID: ${id}`);
  };

  const handleView = (id, type) => {
    console.log(`View ${type} with ID: ${id}`);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'inactive':
      case 'out of stock':
        return 'bg-red-100 text-red-800';
      case 'processing':
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filterData = (data, searchTerm) => {
    if (!searchTerm) return data;
    return data.filter(item => 
      Object.values(item).some(value => 
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const renderUsers = () => {
    const filteredUsers = filterData(users, searchTerm);
    return (
      <div className="space-y-4">
        {filteredUsers.map(user => (
          <div key={user.id} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-pink-100">
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg">{user.name}</h3>
                  <p className="text-pink-600 font-medium">{user.email}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-sm text-gray-500">Role: {user.role}</span>
                    <span className="text-sm text-gray-500">Joined: {user.joinDate}</span>
                    <span className="text-sm text-gray-500">Last login: {user.lastLogin}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                  {user.status}
                </span>
                <button onClick={() => handleView(user.id, 'user')} className="p-2 text-pink-600 hover:bg-pink-50 rounded-lg transition-colors">
                  <Eye size={16} />
                </button>
                <button onClick={() => handleEdit(user.id, 'user')} className="p-2 text-pink-600 hover:bg-pink-50 rounded-lg transition-colors">
                  <Edit size={16} />
                </button>
                <button onClick={() => handleDelete(user.id, 'user')} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderOrders = () => {
    const filteredOrders = filterData(orders, searchTerm);
    return (
      <div className="space-y-4">
        {filteredOrders.map(order => (
          <div key={order.id} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
                  <ShoppingCart className="text-pink-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg">Order #{order.id}</h3>
                  <p className="text-pink-600 font-medium">{order.customerName}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-sm text-gray-500">{order.items} items</span>
                    <span className="text-sm text-gray-500">${order.total}</span>
                    <span className="text-sm text-gray-500">Date: {order.date}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{order.shippingAddress}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
                <button onClick={() => handleView(order.id, 'order')} className="p-2 text-pink-600 hover:bg-pink-50 rounded-lg transition-colors">
                  <Eye size={16} />
                </button>
                <button onClick={() => handleEdit(order.id, 'order')} className="p-2 text-pink-600 hover:bg-pink-50 rounded-lg transition-colors">
                  <Edit size={16} />
                </button>
                <button onClick={() => handleDelete(order.id, 'order')} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderListings = () => {
    const filteredListings = filterData(listings, searchTerm);
    return (
      <div className="space-y-4">
        {filteredListings.map(listing => (
          <div key={listing.id} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-pink-100">
                  <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg">{listing.title}</h3>
                  <p className="text-pink-600 font-medium">${listing.price}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-sm text-gray-500">Category: {listing.category}</span>
                    <span className="text-sm text-gray-500">Stock: {listing.stock}</span>
                    <span className="text-sm text-gray-500">Seller: {listing.seller}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Added: {listing.dateAdded}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(listing.status)}`}>
                  {listing.status}
                </span>
                <button onClick={() => handleView(listing.id, 'listing')} className="p-2 text-pink-600 hover:bg-pink-50 rounded-lg transition-colors">
                  <Eye size={16} />
                </button>
                <button onClick={() => handleEdit(listing.id, 'listing')} className="p-2 text-pink-600 hover:bg-pink-50 rounded-lg transition-colors">
                  <Edit size={16} />
                </button>
                <button onClick={() => handleDelete(listing.id, 'listing')} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-25 to-pink-50" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
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
              <button className="p-2 text-pink-600 hover:bg-pink-50 rounded-lg transition-colors">
                <Filter size={18} />
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
              { id: 'users', label: 'Manage Users', icon: Users, count: users.length },
              { id: 'orders', label: 'Manage Orders', icon: ShoppingCart, count: orders.length },
              { id: 'listings', label: 'Manage Listings', icon: Package, count: listings.length }
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
                <span className="bg-pink-100 text-pink-600 text-xs font-semibold px-2 py-1 rounded-full">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {activeTab === 'users' && 'Manage Users'}
            {activeTab === 'orders' && 'Manage Orders'}
            {activeTab === 'listings' && 'Manage Listings'}
          </h2>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-200 shadow-md hover:shadow-lg">
            <Plus size={18} />
            <span>Add New</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-pink-25 rounded-2xl p-6">
          {activeTab === 'users' && renderUsers()}
          {activeTab === 'orders' && renderOrders()}
          {activeTab === 'listings' && renderListings()}
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;