import React from "react";

const menuItems = [
  { label: "Men", href: "#" },
  { label: "Women", href: "#" },
  { label: "Curated", href: "#" },
  { label: "The Manual", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Sale", href: "#", sale: true },
];

const infoItems = [
  "Free shipping on orders over $150",
  "Free in-store pickup on Mulberry Street",
  "Same Day Local Delivery Available",
];

export default function HeaderBar() {
  return (
    <header className="w-full bg-[#bdbdb2] font-sans shadow">
      <div className="flex items-center justify-between px-4 md:px-12 h-16 md:h-20">
        <div className="text-3xl md:text-4xl font-bold tracking-wide text-black">ONS</div>
        <nav className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-base font-medium transition-all duration-200 hover:scale-110 ${
                item.sale ? "text-red-500" : "text-gray-900"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <a href="#" className="text-base font-medium text-gray-900 hover:scale-110 transition-transform">Account</a>
          <a href="#" className="hover:scale-125 transition-transform" aria-label="Search">
            <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2">
              <circle cx="10" cy="10" r="7" />
              <line x1="16" y1="16" x2="21" y2="21" />
            </svg>
          </a>
          <a href="#" className="hover:scale-125 transition-transform" aria-label="Cart">
            <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2">
              <rect x="5" y="7" width="12" height="10" rx="2" />
              <circle cx="9" cy="19" r="1" />
              <circle cx="15" cy="19" r="1" />
            </svg>
          </a>
        </div>
      </div>
      <nav className="flex flex-col md:flex-row items-center justify-center bg-gray-50 py-2 text-sm md:text-base gap-2 md:gap-8">
        {infoItems.map((info, idx) => (
          <React.Fragment key={info}>
            <span className="text-gray-700">{info}</span>
            {idx < infoItems.length - 1 && (
              <span className="hidden md:inline-block w-px h-5 bg-gray-300 mx-2" />
            )}
          </React.Fragment>
        ))}
      </nav>
      {/* Mobile menu */}
      <nav className="md:hidden flex flex-wrap justify-center gap-4 py-2 bg-[#bdbdb2]">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`text-base font-medium transition-all duration-200 hover:scale-110 ${
              item.sale ? "text-red-500" : "text-gray-900"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
