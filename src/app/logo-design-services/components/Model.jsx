// components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const modalClasses = isOpen ? 'fixed inset-0 flex items-center justify-center z-50' : 'hidden';

  return (
    <div className={modalClasses}>
      <div className=" p-6 rounded-lg">
        
      <div className="relative w-[450px] custom-shadow rounded-3xl">
      <button onClick={onClose} className="font-poppins px-4 mt-3 bg-[#23bbc8] text-[#fff] rounded-full w-[37px] h-[37px] absolute right-[10px] top-30px hover:bg-gray-400" > x </button>
                                <div
                                    className="bg-[#f73600] bg-red-700 rounded-t-3xl text-center font-bold shadow-md">
                                    <h2 class=" text-white text-[30px] py-2 font-poppins text-shadow">UP TO 70% DISCOUNT
</h2>
                                </div>
                                <div class="font-poppins relative bg-red-700 rounded-t-3xl text-center font-semibold shadow-md ">
                                   
                                    <div
                                        class="bg-[#fff] uppercase text-bold leading-7 pt-[9px] pb-[9px] text-black text-[25px] relative">
                                        <h3>
                                       <span className='text-[#f73600]'>70% OFF</span> TILL MIDNIGHT<br/>
                                            <span className="text-[12px]">Fill out this brief form to get your DISCOUNT RESERVED.

</span><br />
                                           
                                        </h3>
                                    </div>
                                   
                                </div>
                                <div className="bg-white pb-5 pt-4 px-3 rounded-b-3xl ">
                                    <form className="px-4" method="POST">
                                        <div class="w-full">
                                            <input type="text" placeholder="Enter Your Name" name="name" required
                                                className="placeholder:text-[#6e6e6e] placeholder:pl-[10px] w-full px-4 py-3 my-3 border border-gray-400 rounded-md focus:outline-none text-[#000] focus:ring focus:border-gray-800 font-roboto" />
                                        </div>
                                        <div class="w-full">
                                            <input type="email" placeholder="Enter Your Email" name="email" required
                                                className="placeholder:text-[#6e6e6e] placeholder:pl-[10px] w-full px-4 py-3 my-3 border border-gray-400 rounded-md focus:outline-none text-[#000] focus:ring focus:border-blue-300 font-roboto" />
                                        </div>
                                        <div class="w-full">
                                            <input type="text" placeholder="Enter Your Phone" name="phone" required
                                                className="placeholder:text-[#6e6e6e] placeholder:pl-[10px] w-full px-4 py-3 my-3 border border-gray-400 rounded-md focus:outline-none text-[#000] focus:ring focus:border-blue-300 font-roboto" />
                                        </div>
                                        <div class="w-full text-center mt-4">
                                            <button
                                                className="bg-[#23bbc8] text-[18px] text-white font-semibold text-center py-3 rounded-md font-poppins uppercase w-[250px]"
                                                id="signupBtn" type="submit">
                                                Place Your Order
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="mt-4 flex justify-end">
         
        </div>
                            </div>

       
      </div>
    </div>
  );
};

export default Modal;
