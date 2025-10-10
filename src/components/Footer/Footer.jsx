import React from "react";
import Container from "../Layout/Container";
import Logo from "../Common/Logo";
import { Link } from "react-router";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import BottomFooter from "./BottomFooter";
import SocialIcon from "../Common/SocialIcon";

const Footer = () => {
  return (
    <footer className="bg-[#001931] py-10">
      <Container>
        <div className="grid grid-cols-12 gap-5 items-start">
          <div className="col-span-12 lg:col-span-3 space-y-2 max-w-sm">
            <Logo logoTextClass="text-white"></Logo>
            <p className="text-gray-400 text-sm">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <ul className="flex flex-row gap-3 mt-3">
              <li>
                <SocialIcon link="/" icon={<Github size={28} />}></SocialIcon>
              </li>
              <li>
                <SocialIcon
                  link="/"
                  icon={<Instagram size={28} />}
                ></SocialIcon>
              </li>
              <li>
                <SocialIcon link="/" icon={<Linkedin size={28} />}></SocialIcon>
              </li>
              <li>
                <SocialIcon link="/" icon={<Twitter size={28} />}></SocialIcon>
              </li>
            </ul>
          </div>
          <div className="col-span-12 sm:col-span-4 lg:col-span-2 space-y-4">
            <h3 className="text-white font-semibold uppercase">Quick Links</h3>
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 max-sm:text-sm hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/apps"
                  className="text-gray-400 max-sm:text-sm hover:underline"
                >
                  Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/installation"
                  className="text-gray-400 max-sm:text-sm hover:underline"
                >
                  Installation
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 sm:col-span-4 lg:col-span-2 space-y-4">
            <h3 className="text-white font-semibold uppercase">Company</h3>
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 max-sm:text-sm hover:underline"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 max-sm:text-sm hover:underline"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 max-sm:text-sm hover:underline"
                >
                  Carrier
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 sm:col-span-4 lg:col-span-2 space-y-4">
            <h3 className="text-white font-semibold uppercase">Legals</h3>
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 max-sm:text-sm hover:underline"
                >
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 max-sm:text-sm hover:underline"
                >
                  Terms of use
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 max-sm:text-sm hover:underline"
                >
                  Cookie policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-3 space-y-4">
            <h3 className="text-white font-semibold uppercase">Newsletter</h3>
            <fieldset className="flex flex-col">
              <label className="text-white">Enter your email address</label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input join-item outline-0 border-0 hover:outline-0 hover:border-0"
                />
                <button className="btn border-0 bg-linear-to-bl from-[#9F62F2] to-[#632EE3] join-item text-white">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </div>
        </div>
        <hr className="border-gray-400 my-5" />
        <BottomFooter></BottomFooter>
      </Container>
    </footer>
  );
};

export default Footer;
