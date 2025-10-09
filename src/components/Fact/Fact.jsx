import Container from "../Layout/Container";
import { facts } from "../../constance";
import FactInfo from "./FactInfo";

const Fact = () => {
  return (
    <section className="bg-linear min-h-[400px] py-20">
      <Container>
        <div>
          <h2 className="text-white text-4xl md:text-5xl text-center font-bold">
            Trusted by Millions, Built for You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-5 sm:gap-5 text-center mt-10">
            {facts.map((fact) => (
              <FactInfo fact={fact}></FactInfo>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Fact;
