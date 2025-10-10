import Container from "../Layout/Container";
import GooglePlayIcon from "../../assets/google-play-icon.png";
import AppStoreIcon from "../../assets/app-store-icon.png";
import HeaderImage from "../../assets/hero.png";

const Header = () => {
  return (
    <header className="pt-20">
      <Container>
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-dark-blue mb-5">
              We Build <br />
              <span className="text-linear font-black">Productive</span> Apps
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">
              At PRO APPS, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. <br /> Our goal is to
              turn your ideas into digital experiences that truly make an
              impact.
            </p>
            <div className="flex gap-2 items-center w-fit mx-auto mt-10">
              <button className="btn max-sm:btn-sm md:btn-lg border border-[#D2D2D2] btn-ghost rounded-sm">
                <img
                  src={GooglePlayIcon}
                  alt="Google Play Icon"
                  className="w-[18px] h-[22px] sm:w-[26px] sm:h-[30px]"
                />
                <span>Google Play</span>
              </button>
              <button className="btn max-sm:btn-sm md:btn-lg border border-[#D2D2D2] btn-ghost rounded-sm">
                <img
                  src={AppStoreIcon}
                  alt="App Store Icon"
                  className="w-[22px] h-[22px] sm:w-[32px] sm:h-[32px]"
                />
                <span>App Store</span>
              </button>
            </div>
          </div>
          <figure className="w-full max-w-4xl mx-auto">
            <img
              src={HeaderImage}
              alt="Header"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </figure>
        </div>
      </Container>
    </header>
  );
};

export default Header;
