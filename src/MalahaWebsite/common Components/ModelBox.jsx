import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import BothForms from "../Form Page/bothForms";

const ModalBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  // Function to open the modal with animation
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 300); // Bounce effect
  };

  return (
    <div className="mt-20">
      <button
        className=" mainColor px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
        onClick={openModal}
      >
        Open Modal
      </button>
      <bothForms />

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 mx-2">
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={handleOverlayClick}
          ></div>

          {/* Modal content with smooth open/close transition */}
          <div
            className={`bg-white rounded-lg shadow-lg z-10 w-full max-w-lg p-6 relative transition-transform transition-opacity duration-500 ease-out transform ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
            } ${isBouncing ? "scale-[105%]" : ""}`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Sign In</h3>
              <button
                className="text-gray-500 hover:text-gray-800 text-xl"
                onClick={closeModal}
              >
                <CgClose />
              </button>
            </div>

            <div className="mb-4">
              <p className="text-gray-600">
                This is a modal with smooth animations and bounce effect! Click
                outside the modal to see the subtle bounce.
              </p>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
                onClick={closeModal}
              >
                Close
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { ModalBox };
