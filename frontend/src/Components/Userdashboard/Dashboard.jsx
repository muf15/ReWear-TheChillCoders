import React, { useEffect, useState } from "react";

// Dummy API endpoints (replace with your backend endpoints)
const PROFILE_API = "/api/user/profile";
const LISTINGS_API = "/api/user/listings";
const PURCHASES_API = "/api/user/purchases";

// Dummy data for now
const dummyProfile = {
  name: "Kanis Jain",
  email: "kanis@example.com",
  phone: "+91 9876543210",
  location: "Indore, India",
  totalListings: 4,
  totalPurchases: 4,
  walletBalance: "₹2,500",
  memberSince: "Jan 2023",
  bio: "Welcome to your dashboard! Here you can manage your listings, purchases, and profile information.",
  avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&h=256&facepad=2"
};

const dummyListings = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    price: "₹1,200"
  },
  {
    id: 2,
    title: "Classic White Sneakers",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    price: "₹2,000"
  },
  {
    id: 3,
    title: "Boho Summer Dress",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    price: "₹950"
  },
  {
    id: 4,
    title: "Retro Sunglasses",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    price: "₹500"
  }
];

const dummyPurchases = [
  {
    id: 1,
    title: "Leather Handbag",
    image: "https://images.unsplash.com/photo-1526178613658-3f1622045544?auto=format&fit=crop&w=400&q=80",
    price: "₹1,800"
  },
  {
    id: 2,
    title: "Casual Hoodie",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    price: "₹1,100"
  },
  {
    id: 3,
    title: "Chunky Sneakers",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    price: "₹2,300"
  },
  {
    id: 4,
    title: "Minimalist Watch",
    image: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0f8f9?auto=format&fit=crop&w=400&q=80",
    price: "₹1,500"
  }
];

export default function Dashboard() {
  const [profile, setProfile] = useState(dummyProfile);
  const [listings, setListings] = useState(dummyListings);
  const [purchases, setPurchases] = useState(dummyPurchases);

  // Example: Fetch from backend API (replace with your fetch logic)
  useEffect(() => {
    // fetch(PROFILE_API).then(res => res.json()).then(setProfile);
    // fetch(LISTINGS_API).then(res => res.json()).then(setListings);
    // fetch(PURCHASES_API).then(res => res.json()).then(setPurchases);
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 font-poppins flex flex-col items-center py-8 px-2">
      {/* REWEAR Brand Header */}
      <div className="w-full max-w-5xl flex items-center justify-between mb-6">
        <h1 className="text-4xl font-extrabold text-black tracking-wide">
          REWEAR
        </h1>
        <span className="text-pink-400 font-semibold text-lg bg-pink-100 px-4 py-2 rounded-xl shadow">
          Your Sustainable Fashion Dashboard
        </span>
      </div>

      {/* Top Bar */}
      <div className="w-full max-w-5xl bg-white rounded-xl shadow flex items-center justify-between px-6 py-4 mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="bg-pink-100 text-black rounded-lg px-4 py-2 w-1/3 outline-none border border-pink-200 focus:border-pink-400 transition"
        />
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 transition">
            <svg width="20" height="20" fill="none" stroke="black" strokeWidth="2">
              <circle cx="10" cy="10" r="8" />
            </svg>
          </button>
        </div>
      </div>

      {/* Profile & Info */}
      <div className="w-full max-w-5xl bg-white rounded-xl shadow px-6 py-8 mb-8 flex flex-col md:flex-row gap-8">
        {/* Profile Image */}
        <div className="flex-shrink-0 flex justify-center items-center">
          <img
            src={profile.avatar}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-pink-200 shadow object-cover"
          />
        </div>
        {/* Info */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="bg-pink-50 rounded-lg px-4 py-2 text-black font-medium shadow">{profile.name}</div>
            <div className="bg-pink-50 rounded-lg px-4 py-2 text-black font-medium shadow">{profile.email}</div>
            <div className="bg-pink-50 rounded-lg px-4 py-2 text-black font-medium shadow">{profile.phone}</div>
            <div className="bg-pink-50 rounded-lg px-4 py-2 text-black font-medium shadow">{profile.location}</div>
          </div>
          <div className="space-y-3">
            <div className="bg-pink-50 rounded-lg px-4 py-2 text-black font-medium shadow">Listings: {profile.totalListings}</div>
            <div className="bg-pink-50 rounded-lg px-4 py-2 text-black font-medium shadow">Purchases: {profile.totalPurchases}</div>
            <div className="bg-pink-50 rounded-lg px-4 py-2 text-black font-medium shadow">Wallet: {profile.walletBalance}</div>
            <div className="bg-pink-50 rounded-lg px-4 py-2 text-black font-medium shadow">Member Since: {profile.memberSince}</div>
          </div>
        </div>
      </div>

      {/* Bio/Description */}
      <div className="w-full max-w-5xl bg-pink-50 rounded-xl shadow px-6 py-6 mb-8 text-black text-lg font-medium">
        {profile.bio}
      </div>

      {/* Listings */}
      <div className="w-full max-w-5xl mb-8">
        <h2 className="text-2xl font-bold text-black mb-4">My Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {listings.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center justify-center min-h-[180px] animate-fade-in"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-lg mb-2"
              />
              <div className="text-black font-semibold">{item.title}</div>
              <div className="text-pink-600 font-medium">{item.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Purchases */}
      <div className="w-full max-w-5xl mb-8">
        <h2 className="text-2xl font-bold text-black mb-4">My Purchases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {purchases.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center justify-center min-h-[180px] animate-fade-in"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-lg mb-2"
              />
              <div className="text-black font-semibold">{item.title}</div>
              <div className="text-pink-600 font-medium">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}