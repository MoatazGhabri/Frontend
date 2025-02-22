import { useState, useCallback } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { signup } from "../../services/authService";



export function SignUp() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [email, setEmail] = useState(""); // State to store email
  const [password, setPassword] = useState(""); // State to store password
  const [confirmPassword, setConfirmPassword] = useState(""); // State to store confirm password
  const [error, setError] = useState(""); // State for error messages
  const [loading, setLoading] = useState(false); // State to manage loading

  const togglePasswordVisibility = useCallback(
    () => setPasswordShown((prev) => !prev),
    []
  );

  const toggleConfirmPasswordVisibility = useCallback(
    () => setConfirmPasswordShown((prev) => !prev),
    []
  );

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Check if the passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError(""); // Clear any previous error

    try {
      const userData = { email, password, confirmPassword };
      console.log("Sending signup data:", userData);

      const response = await signup(userData); // Call the signup API
      console.log("User signed up successfully:", response.data);
      // You can handle successful signup here, like redirecting to login page
    } catch (err) {
      console.error("Error signing up:", err);
      setError("Failed to sign up. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <section className="grid text-center h-screen items-center p-8">
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Sign Up
        </Typography>
        <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
          Create your account by filling the information below
        </Typography>
        <form
          className="mx-auto max-w-[24rem] text-left"
          noValidate
          onSubmit={handleSignUp}
        >
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Your Email
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Password
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              icon={
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  aria-label="Toggle password visibility"
                  className="cursor-pointer focus:outline-none"
                >
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </button>
              }
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Confirm Password
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={confirmPasswordShown ? "text" : "password"}
              icon={
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  aria-label="Toggle confirm password visibility"
                  className="cursor-pointer focus:outline-none"
                >
                  {confirmPasswordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </button>
              }
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <Button
            color="gray"
            size="lg"
            className="mt-6"
            fullWidth
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>
          <Typography
            variant="small"
            color="gray"
            className="mt-4 text-center font-normal"
          >
            Already have an account?{" "}
            <Link to="/signin" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
