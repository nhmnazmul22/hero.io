import LogoImg from "../../assets/logo.png";
import { Link } from "react-router";

const Logo = ({ logoTextClass }) => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src={LogoImg} alt="Pro Apps" className="w-[40px] h-[40px]" />
      <span
        className={`font-bold text-base text-linear uppercase ${
          logoTextClass ? logoTextClass : ""
        }`}
      >
        Pro Apps
      </span>
    </Link>
  );
};

export default Logo;
