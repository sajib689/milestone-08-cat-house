import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4 text-red-600">Oops! Something went wrong.</h1>
        <p className="text-lg text-gray-700 mb-8">We apologize for the inconvenience. Please try again later.</p>
        <img src="/error-image.png" alt="Error" className="max-w-xs mb-8" />
        <Link to='/' className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:bg-red-700">Go Back</Link>
    </div>
    );
};

export default Error;