import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // Make sure lucide-react or your icon library is installed

export default function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center space-x-2 p-2 text-primary dark:text-darkPrimary hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
      aria-label="Go back"
    >
      <ArrowLeft className="h-5 w-5" />
      <span>Back</span>
    </button>
  );
}
