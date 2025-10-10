import React from "react";
import Container from "../../components/Layout/Container";
import useInstalledApps from "../../hooks/useInstalledApps";
import FilterOptions from "../../components/Apps/FilterOptions";
import AppCard from "../../components/Installation/AppCard";
import NotFound from "../../components/Fallback/NotFound";

const Installation = () => {
  const { apps } = useInstalledApps();

  console.log(apps);
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
            <section className="pt-10">
              <AppCard></AppCard>
              {/* {apps.length > 0 ? (
                apps.map((app) => <AppCard app={app}></AppCard>)
              ) : (
                <NotFound isButton={false}></NotFound>
              )} */}
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Installation;
