import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); 
    };

    const handleHome = () => {
        navigate('/'); 
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <img
                className="w-auto border border-gray-600 p-4 h-auto mb-6"
                src="https://i.postimg.cc/zf56NVBH/preview-errorpage-404-background-1614485326.jpg"
                alt="Error Page"
            />
            <div className="flex space-x-4">
                <button
                    onClick={handleBack}
                    className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                    Back
                </button>
                <button
                    onClick={handleHome}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Home
                </button>
            </div>
        </div>
    );
};

export default Error;
