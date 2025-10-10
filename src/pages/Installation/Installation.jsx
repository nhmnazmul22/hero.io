import React from "react";
import Container from "../../components/Layout/Container";
import useInstalledApps from "../../hooks/useInstalledApps";
import FilterOptions from "../../components/Common/FilterOptions";
import AppCard from "../../components/Installation/AppCard";
import NotFound from "../../components/Fallback/NotFound";
import LineSkeleton from "../../components/Fallback/LineSkeleton";

const Installation = () => {
  const { apps, loading } = useInstalledApps();

  return (
    <section className="py-20">
      <Container>
        <div>
          <div className="text-center">
            <h2 className="text-5xl font-bold text-dark-blue mb-5">
              Your Installed Apps
            </h2>
            <p className="text-gray-500 text-lg">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div className="mt-10">
            <FilterOptions
              appsLength={apps.length}
              isInput={false}
            ></FilterOptions>
            {!loading ? (
              <section className="pt-10">
                {apps.length > 0 ? (
                  <div className="grid grid-cols-1 gap-5">
                    {apps.map((app) => (
                      <AppCard key={app.id} app={app}></AppCard>
                    ))}
                  </div>
                ) : (
                  <NotFound isButton={false}></NotFound>
                )}
              </section>
            ) : (
              <LineSkeleton length={3}></LineSkeleton>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Installation;
