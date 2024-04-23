import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import logo from "../assets/home/Logo.svg";

export default function ErrorPage() {
  useEffect(() => {
    // Set the document title when the component mounts
    document.title = '404 Error.';

    // Optionally, you can clear the title when the component unmounts
    return () => {
      document.title = ''; // Reset the document title
    };
  }, []);
  
  const error = useRouteError();
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md mx-auto px-6 py-8 bg-white shadow-md rounded-lg">
        <div className="text-center">
          <div className="icon__download mb-4">
            <img src={logo} alt="React Logo" className="w-50 mx-auto" />
          </div>
          <h1 className="text-4xl font-bold text-[#474747]">404 Error</h1>
          <p className="text-lg text-[#474747] mt-6">We can`t find the page you are looking for.</p>
          <p className="text-sm text-[#ad343e] mb-8 mt-4">{error.statusText || error.message}</p>
          <Link to='/' className="block bg-[#474747] text-white hover:text-white hover:bg-[#ad343e] transition-all font-semibold py-2 px-4 rounded">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
