"use client";
import { useState, useRef, useEffect } from "react";

const videos = [
  {
    src: "/videos/objectDetection_Fire_Smoke.mp4",
    title: "Detection",
  },
  {
    src: "/videos/objectRecognition_face.mp4",
    title: "Recognition",
  },
  {
    src: "/videos/objectTracking_vehicle.mp4",
    title: "Tracking",
  },
];

export default function VideoTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnded = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.load();
      videoElement.play().catch((err) => {
        console.warn("Autoplay failed:", err);
      });
    }
  }, [activeIndex]);

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
      {/* Video */}
      <div className="aspect-video bg-black relative">
        <video
          ref={videoRef}
          src={videos[activeIndex].src}
          muted
          autoPlay
          onEnded={handleEnded}
          controls={false}
          className="w-full h-full object-cover"
        />
        {/* Tabs Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md py-2 px-4 flex justify-center space-x-4">
          {videos.map((video, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-1 text-sm font-medium rounded-full transition-all ${
                activeIndex === idx
                  ? "bg-white text-black"
                  : "text-white border border-white/30 hover:bg-white/10"
              }`}
            >
              {video.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
