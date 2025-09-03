import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been 
            moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-block"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 inline-block"
          >
            Contact Us
          </Link>
        </div>
        
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Pages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              Our Services
            </Link>
            <Link
              to="/work"
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              Our Work
            </Link>
            <Link
              to="/about"
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              to="/process"
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              Our Process
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
