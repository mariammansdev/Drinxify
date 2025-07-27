import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <>
    <Navbar />
    <section className='page'>
        <Outlet />
      {/* <div className='loading' /> */}
    </section>
     
    </>
  );
};
export default HomeLayout;
