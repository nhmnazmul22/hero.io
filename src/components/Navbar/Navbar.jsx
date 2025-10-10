import { Link } from "react-router";
import Container from "../Layout/Container";
import DropDownMenu from "./DropDownMenu";
import MenuLinks from "./MenuLinks";
import { Github, GithubIcon } from "lucide-react";
import Logo from "../Common/Logo";

const Navbar = () => {
  return (
    <div className="bg-white border-b border-[#E9E9E9]">
      <Container>
        <div className="navbar max-sm:px-0">
          <div className="navbar-start">
            <DropDownMenu></DropDownMenu>
            <Logo></Logo>
          </div>
          <div className="navbar-center hidden lg:flex">
            <MenuLinks></MenuLinks>
          </div>
          <div className="navbar-end">
            <Link
              to="https://github.com/nhmnazmul22"
              className="bg-linear hover:bg-linear-to-bl hover:scale-102 transition-all duration-300 flex gap-2 items-center py-2 px-4 rounded-sm text-sm sm:text-base text-white font-semibold"
              target="_blank"
            >
              <span>
                <Github size={20} />
              </span>
              <span>Contribute</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
