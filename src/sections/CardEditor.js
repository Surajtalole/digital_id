import Image from 'next/image';
import { useState } from 'react'; 
import PrimaryButton2 from '@/components/PrimaryButton2';
import Widget1 from '@/components/widgets/Widget1';
import Modal from '@/components/Modal';

export default function signup() {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="my-8">
      <div className="mx-4">
        <input
          type="text"
          placeholder="Enter something"
          className="border border-gray-300 p-2 rounded-md w-full"
        />

        <hr className="h-px my-4 bg-black" />
        <Widget1 />

        <button
          onClick={openModal} // Open the modal when this button is clicked
          className="bg-blue-500 text-white p-2 rounded-md mt-4"
        >
          Open Modal
        </button>

        {/* Render the Modal component conditionally */}
        {isModalOpen && <Modal onClose={closeModal} />}
      </div>
      <div className="fixed bottom-10 w-full">
        <PrimaryButton2 text="Save" href="" />
      </div>
    </div>
  );
}
