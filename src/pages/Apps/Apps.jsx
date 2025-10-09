import { useLoaderData } from "react-router";
import FilterOptions from "../../components/Apps/FilterOptions";
import Container from "../../components/Layout/Container";
import Apps from "../../components/Apps/Apps";

const AppsPage = () => {
  const apps = useLoaderData();

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
            <FilterOptions></FilterOptions>
            <section className="pt-10">
              <Apps apps={apps}></Apps>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppsPage;
