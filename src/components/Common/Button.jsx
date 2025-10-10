import { useNavigate } from "react-router";

const Button = ({ children, link }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(link)}
      className="bg-linear hover:bg-linear-to-tl hover:scale-102 transition-all duration-300 flex gap-2 items-center py-2 px-5 rounded-sm text-sm sm:text-base text-white font-semibold cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
