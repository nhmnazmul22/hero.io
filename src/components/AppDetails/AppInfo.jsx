import { useEffect, useState } from "react";
import DownloadIconImg from "../../assets/icon-downloads.png";
import StarIconImg from "../../assets/icon-ratings.png";
import ReviewIconImg from "../../assets/icon-review.png";
import { abbreviateNumber } from "../../utilities/lib";
import useInstalledApps from "../../hooks/useInstalledApps";

const AppInfo = ({ app }) => {
  const [isInstalled, setIsInstalled] = useState(false);
  const { apps, handleAddApps } = useInstalledApps();

  const handleInstall = () => {
    setIsInstalled(true);
    handleAddApps(app);
  };

  useEffect(() => {
    if (apps.length > 0) {
      const installedApp = apps.find((a) => a.id === app.id);
      if (installedApp) {
        setIsInstalled(true);
      }
    }
  }, [app, apps]);

  return (
    <div className="flex max-lg:flex-col gap-10 items-start">
      <figure className="max-w-[350px] max-h-[350px] w-full h-full rounded-sm overflow-hidden">
        <img src={app.image} alt={app.title} className="w-full h-full " />
      </figure>
      <div>
        <h3 className="text-dark-blue text-2xl sm:text-3xl font-semibold">
          {app.title}
        </h3>
        <p className="text-base sm:text-lg text-gray-500 mt-3">
          Developed by{" "}
          <span className="text-linear font-semibold">{app.companyName}</span>
        </p>
        <div className="divider"></div>
        <div className="flex gap-2 sm:gap-5 items-center mb-5">
          <div className="sm:max-w-[150px] w-full space-y-2">
            <figure>
              <img src={DownloadIconImg} alt="Download Icon" />
            </figure>
            <p className="text-dark-blue text-sm sm:text-base ">Downloads</p>
            <h5 className="text-dark-blue text-2xl sm:text-[40px] font-extrabold">
              {abbreviateNumber(app.downloads)}
            </h5>
          </div>
          <div className="sm:max-w-[150px] w-full space-y-2">
            <figure>
              <img src={StarIconImg} alt="Download Icon" />
            </figure>
            <p className="text-dark-blue text-sm sm:text-base">
              Average Ratings
            </p>
            <h5 className="text-dark-blue text-2xl sm:text-[40px] font-extrabold">
              {Math.round(app.ratingAvg)}
            </h5>
          </div>
          <div className="sm:max-w-[150px] w-full space-y-2">
            <figure>
              <img src={ReviewIconImg} alt="Download Icon" />
            </figure>
            <p className="text-dark-blue text-sm sm:text-base ">
              Total Reviews
            </p>
            <h5 className="text-dark-blue text-2xl  sm:text-[40px] font-extrabold">
              {abbreviateNumber(app.reviews)}
            </h5>
          </div>
        </div>
        <button
          onClick={handleInstall}
          className={`btn btn-lg bg-[#00D390] text-white rounded-sm`}
          disabled={isInstalled}
        >
          {isInstalled
            ? "Installed"
            : `Install Now (${Math.round(app.size)}MB)`}
        </button>
      </div>
    </div>
  );
};

export default AppInfo;
