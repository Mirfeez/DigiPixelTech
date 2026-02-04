import React from "react";
import { Copy, Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import { Whatsapp } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen m-0 ">
      <footer className="py-10 px-10 mt-auto flex justify-around">
        <div className="w-1/3 flex justify-center flex-col">
          <h2>DIGIPIXELTECH</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
            delectus laborum modi accusantium voluptatibus rerum odio quam
            mollitia provident voluptate.
          </p>
        </div>
        <div className="w-1/3 flex gap-20">
          <div>
            <h3 className="text-xl">Services</h3>
            <p>hh</p>
            <p>jjj</p>
            <p>jjjkk</p>
            <p>kk</p>
          </div>
          <div className="list-none">
            <h3 className="text-xl">Others</h3>
            <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Contact Us</a></li>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <a
            href="https://www.instagram.com/digipixeltech/"
            className="decoration-0 p-3 rounded-full hover:bg-white hover:shadow hover:shadow-white hover:text-pink-500"
          >
            <Instagram size={30} className=" " />
          </a>
          <a href="" className="p-3 hover:bg-white rounded-full hover:text-blue-700">
            <Linkedin
              size={30}
              strokeWidth={1.25}
              className=""
            />
          </a>
          <a
            href="mailto:digipixeltech43@gmail.com"
            className="p-3 hover:bg-white rounded-full hover:text-orange-500"
          >
            <Mail size={30} strokeWidth={1.25} className="" />
          </a>
          <a
            href="https://wa.me/917411712661"
            className="p-3 rounded-full hover:bg-white hover:text-green-400"
          >
            <Whatsapp size={30} className=""/>
          </a>
        </div>
      </footer>
      <p>DigiPixelTech</p>
    </div>
  );
};

export default Footer;
