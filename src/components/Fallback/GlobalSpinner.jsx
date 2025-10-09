import Logo from "../../assets/logo.png";

const GlobalSpinner = () => {
  return (
    <div className="min-h-screen absolute bg-white/98 w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <figure className="max-w-[100px] w-full h-auto animate-spin ">
          <img
            src={Logo}
            alt="Pro Apps"
            className="w-full h-full object-cover animate-pulse"
          />
        </figure>
        <p className="mt-5 text-linear text-4xl font-extrabold">Loading...</p>
      </div>
    </div>
  );
};

export default GlobalSpinner;
