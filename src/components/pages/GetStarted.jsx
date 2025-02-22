import { useNavigate } from "react-router-dom";

const GetStarted = () => {
const navigate = useNavigate();

  const options = [
    { label: "Sign In", path: "/signin" },
    { label: "Sign Up", path: "/signup" },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-12 rounded-2xl shadow-lg text-center space-y-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-gray-800">Welcome!</h1>
        <p className="text-gray-600">Choose an option to continue:</p>
        <div className="space-y-4">
          {options.map(({ label, path }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
