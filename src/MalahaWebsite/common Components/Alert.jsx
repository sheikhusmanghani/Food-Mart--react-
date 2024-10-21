// import React, { useState, useEffect } from "react";

// const Toast = () => {
//   // State to toggle the toast visibility
//   const [showToast, setShowToast] = useState(false);

//   // Function to handle button click
//   const handleToast = () => {
//     setShowToast(true); // Show toast when the button is clicked

//     // Auto-hide the toast after 3 seconds
//     setTimeout(() => {
//       setShowToast(false);
//     }, 3000);
//   };

//   return (
//     <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
//       {/* Button to trigger the toast */}
//       <button
//         onClick={handleToast}
//         className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//       >
//         Place Order
//       </button>

//       {/* Conditionally rendering the toast */}
//       {showToast && (
//         <div className="fixed top-4 left-1/2 transform -translate-x-1/2 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-lg z-50 ">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <svg
//                 className="w-6 h-6 text-green-400"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </div>
//             <div className="ml-3">
//               <p className="text-sm text-green-600">
//                 Your Order placed Successfully. 😍
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Toast;

// toast
// export function successtoast(msg) {
//   Toastify({
//     text: `${msg}`,
//     position: "center",
//     style: {
//       background: "linear-gradient(to right, #20b858, #15803d)",
//       borderRadius: "10px",
//       padding: "15px 20px",
//       fontSize: "20px",
//       maxWidth: "500px",
//       textAlign: "center",
//       margin: "15px",
//     },
//     duration: 2000,
//   }).showToast();
// }

// export function errortoast(msg) {
//   Toastify({
//     text: `${msg}`,
//     style: {
//       background: "linear-gradient(to right, red, darkred)",
//       borderRadius: "10px",
//       padding: "15px 20px",
//       fontSize: "20px",
//       maxWidth: "500px",
//       textAlign: "center",
//       margin: "15px",
//     },
//     duration: 2000,
//   }).showToast();
// }

export function successtoast(msg){
    Toastify({
      text: "This is a toast",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
}