import Header from "../../components/Header/Header";
import Fact from "../../components/Fact/Fact";
import { useLoaderData } from "react-router";
import Apps from "../../components/Apps/Apps";
import Container from "../../components/Layout/Container";
import Button from "../../components/Common/Button";

const Home = () => {
  const apps = useLoaderData();
  const filteredApps = apps.slice(0, 8);

  return (
    <>
      <Header></Header>
      <Fact></Fact>
      <section className="py-20">
        <Container>
          <div className="">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-bold mb-3">
                Trending Apps
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Explore All Trending Apps on the Market developed by us
              </p>
            </div>
            <Apps apps={filteredApps}></Apps>
            <div className="w-fit mx-auto my-10 ">
              <Button link="/apps">Show All</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
