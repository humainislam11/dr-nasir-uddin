import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 font-sans">
      <div className="container mx-auto max-w-4xl bg-white shadow-xl rounded-2xl overflow-hidden md:flex">
        {/* Contact Information Section */}
        <div className="md:w-1/2 p-8 bg-blue-600 text-white flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Information</h2>
          <p className="mb-6 opacity-90">
           To contact us or share your valuable feedback, please use the information below.
          </p>

          <div className="space-y-4 text-sm md:text-base">
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-1.5-1.5v-16.5m-16.5 0v16.5m-8.25-16.5h16.5v16.5h-16.5" />
              </svg>
              <span>Dr. Md. Nasir Uddin Bhuiyan</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75h19.5M2.25 12h19.5m-19.5 5.25h19.5" />
              </svg>
              <span>Deputy Director, DG Health</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 9.75h19.5M2.25 15h19.5m-19.5-3.75h19.5M9.75 21h4.5m-4.5 0h-2.25m6.75 0h-2.25m6.75 0h-2.25" />
              </svg>
              <span>Principal, Institute of Health Technology, Sylhet</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75h19.5M2.25 12h19.5m-19.5 5.25h19.5" />
              </svg>
              <span>MBBS & BCS (Health) PGT (Gynae) MPH (LU) Ph.D (RH)</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75h19.5M2.25 12h19.5m-19.5 5.25h19.5" />
              </svg>
              <span>BMDC Reg: 13698</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75h19.5M2.25 12h19.5m-19.5 5.25h19.5" />
              </svg>
              <span>+880 1707 077941 / 01733 388715</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75h19.5M2.25 12h19.5m-19.5 5.25h19.5" />
              </svg>
              <span>nasirbhuiya58@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Contact Form</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
