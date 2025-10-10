import { Download, Star } from "lucide-react";
import { abbreviateNumber } from "../../utilities/lib";
import useInstalledApps from "../../hooks/useInstalledApps";
import { removeData } from "../../utilities/storage";
import toast from "react-hot-toast";

const AppCard = ({ app }) => {
  const { handleRemoveApp } = useInstalledApps();

  const handleUninstall = () => {
    handleRemoveApp(app.id);
    removeData(app.id);
    toast.success(`${app.title} uninstalled`);
  };

  return (
    <div className="w-full sm:max-h-[110px] rounded-sm p-5 flex max-sm:flex-col gap-y-5 sm:gap-10 justify-between sm:items-center bg-white">
      <div className="flex gap-5 justify-center sm:items-center">
        <figure className="max-w-[80px] max-h-[80px] rounded-lg overflow-hidden">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="flex flex-col gap-3">
          <h4 className="text-lg sm:text-xl font-medium text-dark-blue">
            {app.title}
          </h4>
          <div className="flex gap-5 items-center">
            <p className="flex gap-2 items-center text-base text-[#00D390] font-medium">
              <span>
                <Download size={20} />
              </span>
              <span>{abbreviateNumber(app.downloads)}</span>
            </p>
            <p className="flex gap-2 items-center text-base text-[#FF8811] font-medium">
              <span>
                <Star size={20} fill="currentColor" />
              </span>
              <span>{app.ratingAvg}</span>
            </p>
            <p className="text-base text-gray-500">{`${app.size} MB`}</p>
          </div>
        </div>
      </div>
      <button
        onClick={handleUninstall}
        className={`btn btn-lg bg-[#00D390] text-white rounded-sm`}
      >
        Uninstall
      </button>
    </div>
  );
};

export default AppCard;
