import React from "react";

function UserChat() {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="flex items-center space-x-3">
              <img
                src="https://placehold.co/40x40/2563eb/ffffff?text=W"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Worker Name
                </p>
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>

            <button className="text-gray-400 hover:text-gray-600">✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
            {/* Incoming */}
            <div className="flex items-start space-x-3">
              <img
                src="https://placehold.co/40x40/2563eb/ffffff?text=W"
                className="w-8 h-8 rounded-full"
              />
              <div className="bg-white border p-3 rounded-xl shadow-sm text-sm text-gray-700">
                Hello! I’ll reach your location in 20 minutes.
              </div>
            </div>

            {/* Outgoing */}
            <div className="flex justify-end">
              <div className="bg-orange-500 text-white p-3 rounded-xl text-sm max-w-[70%] shadow">
                Okay! I am waiting. Thank you.
              </div>
            </div>

            {/* Incoming */}
            <div className="flex items-start space-x-3">
              <img
                src="https://placehold.co/40x40/2563eb/ffffff?text=W"
                className="w-8 h-8 rounded-full"
              />
              <div className="bg-white border p-3 rounded-xl shadow-sm text-sm text-gray-700">
                Sure! Please keep your gate open.
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-3 border-t bg-white flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:border-orange-500"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm shadow">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserChat;
