import React, { useRef, useEffect } from 'react';

const Header = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video plays automatically
      video.play().catch(console.error);
    }
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Video Element - Full Screen, No Controls */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        style={{ pointerEvents: 'none' }}
      >
        {/* Replace this with your actual video source */}
        <source src="../src/assets/Header.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-700 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-32 h-32 bg-emerald-400 rounded-full mb-4 mx-auto animate-pulse"></div>
            <p className="text-lg">Video not supported in this browser</p>
          </div>
        </div>
      </video>

      {/* Subtle Loading Animation (only shows briefly on load) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 animate-pulse">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default Header;