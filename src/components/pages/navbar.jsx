import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <nav className={`absolute w-full top-0 left-0 z-50 transition-all ${scrolled ? "scrolled" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img className="h-8 w-auto" src="https://thingsboard.io/images/logo.svg" alt="logo" />
              <span className="text-xl font-bold text-gray-800">VirtuIOT</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/signin" className="signin">
                Sign In
              </Link>
              <Link to="/signup" className="signup">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

export default Navbar;
