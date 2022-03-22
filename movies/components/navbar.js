import Link from "next/link";

const Navbar = () => {
  return (
   
    <nav className="bg-white">
      <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container text-center">
        <Link href="/">
          <a className="text-black md:text-3xl">THE
            <span className="text-blue-600"> MOVIES</span>
          </a>
        </Link>
        <Link href="/help" passHref>
          <button className=" flex-column content-end font-bold text-black py-3 pl-80 md:text-2xl  text-sm mt-4">HELP</button>
        </Link>
      </div>
    </nav>
  
  );
};

export default Navbar;