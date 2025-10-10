import Container from "../../components/Layout/Container";
import AppInfo from "../../components/AppDetails/AppInfo";
import { useLoaderData, useParams } from "react-router";
import Chart from "../../components/AppDetails/Chart";
import NotFound from "../../components/Fallback/NotFound";

const AppDetails = () => {
  const apps = useLoaderData();
  const { id } = useParams();
  const app = apps.find((app) => app.id === id);

  if (!app) {
    return <NotFound></NotFound>;
  }

  return (
    <section className="py-20">
      <Container>
        <div className="">
          <AppInfo app={app}></AppInfo>
        </div>
        <div className="divider"></div>
        <div className="w-full h-[400px]">
          <h4 className="text-2xl font-semibold text-dark-blue">Ratings</h4>
          <Chart data={app.ratings}></Chart>
        </div>
        <div className="divider"></div>
        <div>
          <h4 className="text-2xl font-semibold text-dark-blue">Description</h4>
          <div className="mt-5">
            <p className="text-lg text-gray-600">{app.description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppDetails;
