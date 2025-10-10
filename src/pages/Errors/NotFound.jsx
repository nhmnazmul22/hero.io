import React from "react";
import Container from "../../components/Layout/Container";
import NotFoundImg from "../../assets/error-404.png";
import Button from "../../components/Common/Button";

const NotFound = () => {
  return (
    <section className="py-20 h-screen">
      <Container>
        <div>
          <figure className="mx-auto w-fit">
            <img src={NotFoundImg} alt="" />
          </figure>
          <div className="w-fit mx-auto text-center mt-10">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-3 text-[#001931]">
              Oops, page not found!
            </h2>
            <p className="text-base sm:text-lg text-gray-500">
              The page you are looking for is not available.
            </p>
            <div className="w-fit mx-auto mt-5">
              <Button link="/">Go Back!</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
