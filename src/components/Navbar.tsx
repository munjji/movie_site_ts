import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 flex flex-row justify-between items-cente">
      <Link to="/">
        <p className="text-red-500 font-bold text-lg">MUNJJI</p>
      </Link>
      <div className="flex flex-row gap-1">
        <Link to="/login">
          <button
            type="button"
            className="w-[100px] h-[40px] text-center text-white bg-black rounded-xl"
          >
            로그인
          </button>
        </Link>
        <Link to="/signup">
          <button
            type="button"
            className="w-[100px] h-[40px] text-center text-white bg-red-500 rounded-xl"
          >
            회원가입
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
