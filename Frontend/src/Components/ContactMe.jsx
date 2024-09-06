
import React from 'react';

const ContactMe= () => {
  return (
    <section id="contact" className="py-16 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-500">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-300  font-semi-bold text-xl mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-xl font-semi-bold mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-xl font-semi-bold mb-2" htmlFor="message">Message</label>
            <textarea id="message" className="w-full p-2 border rounded" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
