import React from "react";
import Head from "next/head";

const ContactUs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
      <div className="bg-black p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-primary-darker">
          Contact Information
        </h1>
        <p className="text-lg font-semibold mb-4 text-white">Get In Touch</p>
        <p className="text-white  mb-4">
          For inquiries, nominations, or partnership opportunities, reach out to
          our team. We are here to assist you.
        </p>
        <p className="text-white mb-2">
          Address :
          <span className="font-bold">
            {" "}
            Shop No 68, 2nd Floor, Jagtap Complex, Shramik Nagar,
            Satpur, Nashik -422012{" "}
          </span>
        </p>
        <p className="text-white mb-2">
          Email :<span className="font-bold"> tycoonsofasia@gamil.com</span>
        </p>
        <p className="text-white  mb-2">
          Phone : <span className="font-bold"> +123456890 </span>
        </p>
      </div>
      <div className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14997.155209932467!2d73.68751096397455!3d19.99639009998723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x3bddec57ab0feb7d%3A0x8de82948d1990def!2sShramik%20Nagar%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710071672888!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
