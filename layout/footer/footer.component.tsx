import Link from "next/link";
import React from "react";

const FooterComponent = () => {
  return (
    <div className="w-full h-[220px] flex flex-col">
      <div className="basis-[60%] bg-primary-darker"></div>
      <div className="basis-[40%] bg-black w-full py-3 md:px-10 lg:px-14">
        <div className="border-t border-b border-primary-darker flex flex-col md:flex-row justify-center items-center gap-4 p-4">
          <Link
            href={"/privacy-policy"}
            className="text-primary-default text-center md:text-left text-sm md:text-md">
            Privacy Policy
          </Link>
          <Link
            href={"/terms-and-conditions"}
            className="text-primary-default text-center md:text-left text-sm md:text-md">
            Terms and Condition
          </Link>
        </div>
        <div className="flex flex-col md:flex-row w-full p-2 justify-between gap-4">
          <p className="text-white text-center md:text-left text-sm md:text-md">
            Copyright © Tycoons of Asia. All Rights Reserved.
          </p>
          <p className="text-white text-center md:text-left text-sm md:text-md">
            Designed By{" "}
            <Link href={"https://adytronic.com"} target="_blank" className="text-primary-default">
              Adytronic Media
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
