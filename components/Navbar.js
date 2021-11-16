import Link from "next/link";
import { useTheme } from "next-themes";
import { MdDarkMode, MdWbSunny } from "react-icons/md";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    //incase not sticky, give h to parent div and plan accordingly
    <div className=" flex sticky top-0 z-50">
      <div className="flex bg-blue-900 dark:bg-gray-700 dark:text-gray-400 h-16 justify-between place-items-center w-full px-6 shadow-lg">
        <Link href="/">
          <a className="text-white text-2xl font-bold">amazona</a>
        </Link>
        {/* used px again in below div, be carefull. */}

        <div className="flex place-items-center space-x-10 px-16">
          <div className="flex gap-4 place-items-center text-white">
            {theme === "light" ? (
              <button
                className="bg-white text-black p-2 font-bold rounded-full"
                onClick={() => setTheme("dark")}
              >
                <MdDarkMode/>
              </button>
            ) : (
              <button
                className="bg-black p-2 font-bold rounded-full"
                onClick={() => setTheme("light")}
              >
                <MdWbSunny />
              </button>
            )}
          </div>
          <Link href="/">
            <a className="text-white font-bold">Cart</a>
          </Link>
          <Link href="/">
            <a className="text-white font-bold">LogIn</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
