/* eslint-disable react/prop-types */
// Modal.jsx
import { useEffect } from "react";
const Modal = ({ isOpen, closeModal, onSubmit }) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      const company = event.target.company.value;
      const email = event.target.email.value;
      onSubmit(company, email);
    };
  
    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
      }, [isOpen]);
    
      if (!isOpen) return null;
  
    return (
      <>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isOpen ? '' : 'hidden'}`} onClick={closeModal}></div>
        <dialog open className="modal modal-bottom sm:modal-middle" id="my_modal">
          <form onSubmit={handleSubmit} className="modal-box">
            <div className="flex flex-col justify-center items-center">
            <h3 className="font-bold text-lg mb-4">Provide Your Details</h3>
            <p className="font-sm text-gray-600 text-sm text-center mb-4">You will be able to access linkedin profiles after providing company name and email</p>
            <input type="text" placeholder="Company Name" name="company" className="input input-bordered w-full " required />
            <input type="email" placeholder="Email" name="email" className="input input-bordered w-full my-4" required />
            
            </div>
            <div className="modal-action">
              <button type="submit" className="btn bg-colorBrand500 text-white hover:bg-colorBrand700">Submit</button>
              <button type="button" onClick={closeModal} className="btn bg-red-500 hover:bg-red-700 text-white">Close</button>
            </div>
          </form>
        </dialog>
      </>
    );
  };
  
  export default Modal;
  
