import { useContext, useState } from "react";
import { FirebaseContext } from "./Firebase/FirebaseContext";
import { Navigate } from "react-router-dom";
// import { ModalBox } from "./common Components/ProductAddPopup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./Firebase/FirebaseConfig";
import { toast } from "react-toastify";
import { FaCloudUploadAlt } from "react-icons/fa";

const AdminPanel = () => {
  const { isLoggedIn } = useContext(FirebaseContext);
  const [fileName, setFileName] = useState("Upload Image");
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if user is not logged in
  if (isLoggedIn === false) {
    return <Navigate to="/form" />;
  }

  const handleFile = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "first-cloudinary-app");
    data.append("cloud_name", "dp2y4fbqv");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dp2y4fbqv/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const uploadedImageUrl = await res.json();
    return uploadedImageUrl.url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const file = formData.get("image");

    try {
      const imageUrl = await handleFile(file);

      const formValues = {
        name: formData.get("name"),
        price: formData.get("price"),
        quantity: formData.get("quantity"),
        unit: formData.get("unit"),
        image: imageUrl,
      };

      // send `formValues` to firebase
      const docRef = await addDoc(collection(db, "products"), formValues);

      setIsLoading(false);
      toast.success("This product has been saved.");
      e.target.reset();
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mt-20 mb-4 w-screen">
        <form
          className="flex flex-col min-w-56 md:w-1/3 p-4 mainColor rounded-lg"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold py-1 uppercase text-center ">
            Add Your Product
          </h1>
          <hr className="mb-4" />

          <label htmlFor="productName">Product Name :</label>
          <input
            type="text"
            id="productName"
            name="name"
            placeholder="Apple, Mango, ext..."
            required
            className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 text-black"
          />

          <label htmlFor="price" className="mt-3">
            Price :
          </label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="1000, 2000, 3000..."
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 text-black"
          />

          <label htmlFor="quantity" className="mt-3">
            Quantity :
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="1 , 6 , 12..."
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 text-black"
          />

          <label htmlFor="unit" className="mt-3">
            Unit :
          </label>
          <input
            type="text"
            id="unit"
            name="unit"
            placeholder="Kg, Dozen, Pieces..."
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 text-black"
          />

          <select className="text-gray-600 mt-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 ">
            <option value="fruits">Fruits</option>
            <option value="vegitables">Vegitables</option>
            <option value="essentials">Esentials</option>
            <option value="">Select any Catogory</option>
          </select>

          <label
            htmlFor="image"
            className="my-3 flex justify-center items-center gap-2"
          >
            {fileName}
            <FaCloudUploadAlt className="w-8 h-5" />
            <input
              type="file"
              id="image"
              name="image"
              // required
              // className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 text-black"
              onChange={(e) => {
                setFileName(e.target.files[0].name);
              }}
              className="hidden"
            />
          </label>
          {isLoading ? (
            <div className="flex gap-2 justify-center my-3">
              {/* loading.... */}
              <span id="loader"></span>
              <span id="loader"></span>
              <span id="loader"></span>
            </div>
          ) : (
            <input
              type="submit"
              value="Push It..."
              className="w-full mainColor border-2 mt-1 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
            />
          )}
        </form>
      </div>
    </>
  );
};

export default AdminPanel;

{
  /* Optional Modal Box */
}
{
  /* <ModalBox setIsOpen={setIsOpen} isOpen={isOpen} />  */
}
