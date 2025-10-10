import React from "react";
import NotFundImage from "../../assets/App-Error.png";
import Container from "../Layout/Container";
import Button from "../Common/Button";

const NotFound = ({ isButton = true }) => {
  return (
    <section className="py-20 h-screen">
      <Container>
        <div>
          <figure className="mx-auto w-fit">
            <img src={NotFundImage} alt="" />
          </figure>
          <div className="w-fit mx-auto text-center mt-10">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-3 text-[#001931]">
              OPPS!! APP NOT FOUND
            </h2>
            <p className="text-base sm:text-lg text-gray-500">
              The App you are requesting is not found on our system. please try
              another apps
            </p>
            {isButton && (
              <div className="w-fit mx-auto mt-5">
                <Button link="/apps">Go Back!</Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
