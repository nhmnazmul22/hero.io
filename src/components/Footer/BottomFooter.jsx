import React from "react";

const BottomFooter = () => {
  return (
    <div className="footer sm:footer-horizontal footer-center text-base-content">
      <p className="text-gray-400">
        Copyright © {new Date().getFullYear()} - All right reserved by Pro Apps
        LTD.
      </p>
    </div>
  );
};

export default BottomFooter;
