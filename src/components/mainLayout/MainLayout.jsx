import { Fragment } from 'react'
import { Outlet } from 'react-router-dom';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function MainLayout() {
  return (
    <Fragment>
      <Nav/>
      <Header/>
        <Outlet/>
      <Footer/>
    </Fragment>
  )
}

export default MainLayout