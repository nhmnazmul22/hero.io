import Button from "../common/Button";
import NotFound from "../Fallback/NotFound";
import Container from "../Layout/Container";
import AppCard from "./AppCard";

const Apps = ({ apps }) => {
  return (
    <section className="py-20">
      <Container>
        <div className="">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-3">Trending Apps</h2>
            <p className="text-lg text-gray-600">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          {apps.length > 0 ? (
            <div className="grid grid-cols-4 gap-5 mt-10">
              {apps.map((app) => (
                <AppCard app={app}></AppCard>
              ))}
            </div>
          ) : (
            <NotFound isButton={false}></NotFound>
          )}
          <div className="w-fit mx-auto my-10 ">
            <Button link="/apps">Show All</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Apps;
