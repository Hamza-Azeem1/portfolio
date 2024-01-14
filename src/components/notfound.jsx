import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
            <h1 className="text-6xl font-bold text-white mb-4">404</h1>
            <p className="text-2xl text-white mb-8">Page not found</p>
            <Link to="/" className="text-blue-500 hover:underline">
                Go to Home Page
            </Link>
        </div>
    );
};

export default NotFound;
