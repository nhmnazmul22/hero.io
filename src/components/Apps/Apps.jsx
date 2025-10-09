import NotFound from "../Fallback/NotFound";
import AppCard from "./AppCard";

const Apps = ({ apps }) => {
  return (
    <>
      {apps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-5 mt-10">
          {apps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      ) : (
        <NotFound isButton={false}></NotFound>
      )}
    </>
  );
};

export default Apps;
