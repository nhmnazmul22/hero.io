import { NavLink } from "react-router";

const MenuLinks = () => {
  const getLinkClasses = ({ isActive }) =>
    `font-medium text-base pb-1 hover-text-liner hover:font-semibold after:content-[""] after:block after:w-full after:-translate-x-3 after:rounded after:opacity-0 hover:after:opacity-100 hover:after:translate-x-0 after:h-[3px] after-bg-liner after:transition-all after:duration-300 ${
      isActive &&
      "font-semibold text-linear after:opacity-100 after:translate-x-0"
    }`;

  return (
    <ul className="px-1 flex gap-5">
      <li>
        <NavLink to="/" className={getLinkClasses}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/apps" className={getLinkClasses}>
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink to="/installation" className={getLinkClasses}>
          Installation
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuLinks;
