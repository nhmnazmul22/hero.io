import { Download, Star } from "lucide-react";
import { abbreviateNumber } from "../../utilities/lib";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <Link to={`/app/${app.id}`}>
      <div className="card bg-white shadow-sm hover:shadow-lg p-5 transition-all duration-300">
        <figure className="w-full h-[320px] rounded-lg overflow-hidden">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body p-0 py-5">
          <h2 className="card-title">{app.title}</h2>
          <div className="flex justify-between items-center mt-5">
            <div className="badge rounded-sm bg-[#F1F5E8] text-[#00D390]">
              <Download size={14} />{" "}
              <span>{abbreviateNumber(app.downloads)}</span>
            </div>
            <div className="badge rounded-sm bg-[#FFF0E1] text-[#FF8811]">
              <Star fill="currentColor" size={14} />{" "}
              <span>{app.ratingAvg}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
