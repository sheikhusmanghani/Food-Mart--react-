import { useNavigate } from "react-router-dom";
import error from "../../public/images/error.jpg";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center pt-10">
      <img src={error} alt="Page Not Found" />
      {/* <h1 className="text-center text-3xl font-semibold text-red-500 m-12">
        Sorry - Page Not Found
      </h1> */}
      <button
        onClick={() => navigate("/")}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full "
      >
        Back To Home
      </button>
    </div>
  );
};

export default NotFound;
