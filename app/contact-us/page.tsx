import React from "react";
import Head from "next/head";

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
          Address :
          <span className="font-bold">
            {" "}
            Shop No 68, 2nd Floor, Jagtap Complex, Shramik Nagar, Satpur, Nashik-422012
          </span>
        </p>
        <p className="text-white mb-2">
          Email :{" "}
          <a className="font-bold" href="mailto:hello@tycoonsofasia.com">
            hello@tycoonsofasia.com
          </a>
        </p>
        <p className="text-white  mb-2">
          Phone : <span className="font-bold">+91 7507519639</span>
        </p>
      </div>
      <div className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.33289533821662!2d73.71116912410007!3d19.99481428165237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdded0b95b003c5%3A0x9a5202de9f0f453!2sJagtap%20Commercial%20Complex!5e0!3m2!1sen!2sin!4v1710361159679!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
