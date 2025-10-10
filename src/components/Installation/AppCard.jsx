import { Download, Star } from "lucide-react";
import React from "react";

const AppCard = ({ app }) => {
  return (
    <div className="w-full max-h-[110px] rounded-sm p-5 flex justify-between items-center bg-white">
      <div className="flex gap-5 justify-center items-center">
        <figure className="w-[80px] h-[80px] rounded-lg overflow-hidden">
          <img
            src="https://i.ibb.co.com/4gpK8bYr/app-2.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="flex flex-col gap-3">
          <h4 className="text-xl font-medium text-dark-blue">
            WeatherGo: Live Weather Forecasts with Radar & Alerts
          </h4>
          <div className="flex gap-5 items-center">
            <p className="flex gap-2 items-center text-base text-[#00D390] font-medium">
              <span>
                <Download size={20} />
              </span>
              <span>9M</span>
            </p>
            <p className="flex gap-2 items-center text-base text-[#FF8811] font-medium">
              <span>
                <Star size={20} fill="currentColor" />
              </span>
              <span>5</span>
            </p>
            <p className="text-base text-gray-500">245 MB</p>
          </div>
        </div>
      </div>
      <button className={`btn btn-lg bg-[#00D390] text-white rounded-sm`}>
        Uninstall
      </button>
    </div>
  );
};

export default AppCard;
