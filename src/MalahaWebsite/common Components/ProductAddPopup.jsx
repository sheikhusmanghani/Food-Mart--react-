// import { useState } from "react";

// const ModalBox = ({setIsOpen , isOpen}) => {
//   const [isBouncing, setIsBouncing] = useState(false);

//   const closeModal = () => {
//     setIsOpen(false); // Modal close karne ke liye
//   };

//   const handleOverlayClick = () => {
//     setIsBouncing(true);
//     setTimeout(() => setIsBouncing(false), 300); // Bounce effect
//   };

//   return (
//     <>
//       {isOpen && (
//         // Modal tabhi show hoga jab isOpen true hoga

//         <div className="fixed inset-0 flex items-center justify-center z-50 mx-2">
//           {/* Background overlay */}
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
//             onClick={handleOverlayClick}
//           ></div>

//           {/* Modal content  */}
//           <div
//             className={`bg-white rounded-lg shadow-lg z-10 w-full max-w-lg p-6 relative transition-transform duration-500 ease-out transform ${
//               isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
//             } ${isBouncing ? "scale-[105%]" : ""}`}
//           >
//             <div className="mb-4">
//               <h6 className="font-semibold text-gray-800 ">abs</h6>
//               <hr className="mt-3" />
//             </div>

//             {/* modal body */}
//             <div className="space-x-3">
//               <button
//                 className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
//                 onClick={closeModal} // Close button
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export { ModalBox };
