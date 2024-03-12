import { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  function onClose() {
    setIsOpen(false);
  }

  return (
    <div
      className={
        isOpen
          ? "fixed z-50 inset-0 bg-black bg-opacity-80 transition-opacity ease-in-out duration-200"
          : "hidden"
      }
    >
      <div className="w-3/4 md:w-max flex flex-col mx-auto mt-48 p-8 rounded-md shadow-md bg-white">
        <div className="flex flex-col gap-4">
          <h5 className="text-2xl font-bold">Modal Title</h5>
          <p className="text-lg">This is the content of the modal</p>
          <div className="h-4"></div>
          <button
            onClick={onClose}
            className="w-1/3 mx-auto p-2 rounded-md bg-black text-white hover:bg-gray-300 hover:text-black"
          >
            Close
          </button>
        </div>
        <div className="mt-4"></div>
      </div>
    </div>
  );
};

export default Modal;
