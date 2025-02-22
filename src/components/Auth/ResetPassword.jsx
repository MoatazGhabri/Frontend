import { useState, useCallback } from "react";
import axios from "axios";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // To manage loading state
  const [error, setError] = useState(""); // To capture and show errors
  const [success, setSuccess] = useState(""); // To show success message

  const handleEmailChange = useCallback((e) => setEmail(e.target.value), []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true); // Set loading to true when request starts
      setError(""); // Reset any previous error message
      setSuccess(""); // Reset any previous success message

      try {
        // Replace this with your actual API endpoint for resetting password
        const response = await axios.post(
          "http://localhost:5000/api/auth/reset-password",
          { email }
        );

        // Assuming the response contains a success message
        if (response.data.success) {
          setSuccess("A password reset link has been sent to your email.");
        }
      } catch (err) {
        setError("Failed to send password reset link. Please try again.");
        console.error("Error resetting password:", err);
      } finally {
        setLoading(false); // Set loading to false when the request is finished
      }
    },
    [email]
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          {success && (
            <div className="text-green-500 text-sm mb-4">{success}</div>
          )}
          <button
            type="submit"
            className={`w-full bg-slate-900 text-white p-2 rounded-md hover:bg-black focus:outline-none focus:shadow-outline-blue ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
