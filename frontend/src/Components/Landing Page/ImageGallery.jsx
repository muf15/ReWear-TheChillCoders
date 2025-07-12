import React, { useRef, useEffect } from "react";

// Add your image URLs here (use import or direct public URLs)
const images = [
  "/assets/gallery1.jpg",
  "/assets/gallery2.jpg",
  "/assets/gallery3.jpg",
  "/assets/gallery4.jpg",
  "/assets/gallery5.jpg",
];

export default function ImageGallery() {
  const scrollRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    let direction = 1;
    let animationFrame;

    const animateScroll = () => {
      if (!scrollContainer) return;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      scrollAmount += direction * 2;
      if (scrollAmount >= maxScroll || scrollAmount <= 0) direction *= -1;
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      animationFrame = requestAnimationFrame(animateScroll);
    };

    animationFrame = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="w-full bg-white py-8">
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide px-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="min-w-[320px] md:min-w-[400px] lg:min-w-[420px] h-[600px] flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-lg transition-transform duration-700 hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            <img
              src={src}
              alt={`gallery-${idx}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}