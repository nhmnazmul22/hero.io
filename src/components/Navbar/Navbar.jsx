import { Link } from "react-router";
import Logo from "../../assets/logo.png";
import Container from "../Layout/Container";
import DropDownMenu from "./DropDownMenu";
import MenuLinks from "./MenuLinks";

const Navbar = () => {
  return (
    <div className="bg-white border-b border-[#E9E9E9]">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <DropDownMenu></DropDownMenu>
            <Link to="/" className="flex items-center gap-2">
              <img src={Logo} alt="Pro Apps" className="w-[40px] h-[40px]" />
              <span className="font-bold text-base text-linear uppercase ">
                Pro Apps
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <MenuLinks></MenuLinks>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
