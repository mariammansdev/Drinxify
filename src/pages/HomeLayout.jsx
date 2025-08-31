import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import  { useState } from 'react';
const HomeLayout = () => {
  const navigation = useNavigation();
  const state = navigation.state;
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <SideBar handleOpenMenu =  {handleOpenMenu} isOpen = {isOpen} />
    <Navbar />
    <section className='page'>
      {state === 'loading' ? <div className='loading' /> : <Outlet />}
    </section>
    </>
  );
};
export default HomeLayout;
