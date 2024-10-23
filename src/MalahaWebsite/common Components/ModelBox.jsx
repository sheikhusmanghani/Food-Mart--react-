import { signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import { CgClose } from "react-icons/cg";
import { auth } from "../Firebase/FirebaseConfig";
import { successtoast } from "./Alert";
import { FirebaseContext } from "../Firebase/FirebaseContext";

const ModalBox = ({ isOpen, setIsOpen, ques }) => {
  // for vars of firebase
  const contextData = useContext(FirebaseContext);

  const [isBouncing, setIsBouncing] = useState(false);

  const closeModal = () => {
    setIsOpen(false); // Modal close karne ke liye
  };

  const handleOverlayClick = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 300); // Bounce effect
  };

  return (
    <>
      {isOpen && ( // Modal tabhi show hoga jab isOpen true hoga
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
              <h6 className="text-xl font-semibold text-gray-800">{ques}</h6>
              <button
                className="text-gray-500 hover:text-gray-800 text-xl"
                onClick={closeModal} // Close button
              >
                <CgClose />
              </button>
            </div>

            {/* modal body */}
            {/* <div className="mb-4">
              <p className="text-gray-600">
                This is a modal with smooth animations and bounce effect! Click
                outside the modal to see the subtle bounce.
              </p>
            </div> */}

            <div className="flex justify-end space-x-3">
              <button
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
                onClick={closeModal} // Close button
              >
                Close
              </button>
              <button
                onClick={async () => {
                  await signOut(auth);
                  closeModal(); // Close modal after logout
                  successtoast("Successfully Logout ! ");
                  contextData.setIsLoggedIn(false);
                }}
                className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { ModalBox };
