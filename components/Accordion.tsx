import { useState } from "react";

const Accordion = ({ title, content }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAccordionClick = () => {
    if (!isOpen) {
      // Close all other accordions
      const accordions = document.querySelectorAll(".accordion");
      accordions.forEach((accordion) => {
        if (accordion !== title) {
          accordion.classList.remove("open");
        }
      });
    }
    handleToggle();
  };

  return (
    <div className="border border-gray-300 rounded-md w-1/2 m-auto">
      <div
        className={`flex items-center justify-between px-4 py-3 cursor-pointer accordion ${
          isOpen ? "open" : ""
        }`}
        onClick={handleAccordionClick}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`w-6 h-6 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? (
            <path
              fill="currentColor"
              d="M12 4.42L3.3 13.3a1 1 0 1 0 1.4 1.4L12 6.4l7.3 8.3a1 1 0 1 0 1.4-1.4L12 4.42z"
            />
          ) : (
            <path
              fill="currentColor"
              d="M12 19a1 1 0 0 1-1-1V6.42l-7.3 8.3a1 1 0 0 1-1.4-1.4l9-10a1 1 0 0 1 1.4 0l9 10a1 1 0 0 1-1.4 1.4L13 6.42V18a1 1 0 0 1-1 1z"
            />
          )}
        </svg>
      </div>
      {isOpen && (
        <div className="px-4 py-3 bg-gray-100">
          <p className="text-gray-600">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
