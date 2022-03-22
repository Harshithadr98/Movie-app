// import Meta from "./Meta";
import Navbar from "./navbar";

const Header = ({ children }) => {
  return (
    <>
      
      <Navbar />
      <main>
        {children}
      </main>
    </>
  );
};

export default Header;