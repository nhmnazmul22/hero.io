import { useLoaderData } from "react-router";
import FilterOptions from "../../components/Apps/FilterOptions";
import Container from "../../components/Layout/Container";
import Apps from "../../components/Apps/Apps";
import useFilter from "../../hooks/useFilter";
import { useEffect, useState } from "react";
import CardSkeleton from "../../components/Fallback/CardSkeleton";
import NotFound from "../../components/Fallback/NotFound";

const AppsPage = () => {
  const apps = useLoaderData();
  const { searchText } = useFilter();
  const [filteredApps, setFilteredApps] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const filteredApps = apps.filter((app) => {
        const formatTitle = app.title.toLowerCase();
        const formateText = searchText.toLowerCase();

        if (searchText) {
          return formatTitle.includes(formateText);
        }

        return true;
      });

      setFilteredApps(filteredApps);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [apps, searchText]);

  return (
    <section className="py-20">
      <Container>
        <div className="space-y-5">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-dark-blue mb-5">
              Our All Applications
            </h2>
            <p className="text-gray-500 text-lg">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>

          <div className="">
            <FilterOptions appsLength={filteredApps.length}></FilterOptions>
            <section className="pt-10">
              {loading && <CardSkeleton length={4}></CardSkeleton>}
              {!loading && filteredApps.length > 0 && (
                <Apps apps={filteredApps}></Apps>
              )}
              {!loading && filteredApps.length === 0 && (
                <NotFound isButton={false}></NotFound>
              )}
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppsPage;
