import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const state = navigation.state;

  return (
    <>
    <Navbar />
      <section className='page'>
        {state === 'loading' ? <div className='loading' /> : <Outlet />}
      </section>
    </>
  );
};
export default HomeLayout;
