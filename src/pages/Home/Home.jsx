import Header from "../../components/Header/Header";
import Fact from "../../components/Fact/Fact";
import { useLoaderData } from "react-router";
import Apps from "../../components/Apps/Apps";
const Home = () => {
  const apps = useLoaderData();
  const filteredApps = apps.slice(0, 8);

  return (
    <>
      <Header></Header>
      <Fact></Fact>
      <Apps apps={filteredApps}></Apps>
    </>
  );
};

export default Home;
