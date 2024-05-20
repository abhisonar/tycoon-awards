import React from 'react';
import Head from 'next/head';

const ContactUs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
      <div className="bg-black p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-primary-darker">Contact Information</h1>
        <p className="text-lg font-semibold mb-4 text-white">Get In Touch</p>
        <p className="text-white  mb-4">
          For inquiries, nominations, or partnership opportunities, reach out to our team. We are
          here to assist you.
        </p>
        <p className="text-white mb-2">
          Address : <span className="font-bold">Office No 203 & 204, 2nd Floor, Kadam Mension, Above Mahalaxami Sweets, Mahatma Nagar, Nashik - 422005</span>
        </p>
        <p className="text-white mb-2">
          Email :{' '}
          <a className="font-bold" href="mailto:hello@tycoonsofasia.com">
            hello@tycoonsofasia.com
          </a>
        </p>
        <p className="text-white  mb-2">
          Phone : <span className="font-bold">+91 7507517639</span>
        </p>
      </div>
      <div className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.2251620302363!2d73.75147197397497!3d19.999062481404966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0xc5c1e66d64bae3c2!2sXQX3%2BJJF%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716201233067!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
