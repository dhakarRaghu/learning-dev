import React from 'react';

export function VideoCard() {
  return (
    <div className="flex flex-col w-72 m-2 border border-gray-300 rounded-lg overflow-hidden shadow-lg">
      <img src="photo.png" alt="Video Thumbnail" className="w-full h-auto" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Video Title</h3>
        <p className="text-sm text-gray-600 mb-4">Video description goes here. This is a brief summary of the video content.</p>
        <div className="flex items-center">
          <img src="photo.png" alt="Channel Image" className="w-10 h-10 rounded-full mr-4" />
          <p className="text-sm font-medium text-gray-800">Channel Name</p>
        </div>
      </div>
    </div>
  );
} 