import React from "react";

interface NotificationWindowProps {
  text: string;
  onClose: () => void;
}

export default function NotificationWindow({
  text,
  onClose,
}: NotificationWindowProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Notification Content */}
        <div className="text-center">
          <p className="text-gray-900 text-lg font-semibold">{text}</p>
        </div>
      </div>
    </div>
  );
}
