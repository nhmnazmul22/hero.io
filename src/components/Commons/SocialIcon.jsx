import React from "react";
import { Link } from "react-router";

const SocialIcon = ({ link, icon }) => {
  return (
    <Link
      to={link}
      className="text-gray-400 hover:text-purple-600 duration-300"
    >
      {icon}
    </Link>
  );
};

export default SocialIcon;
