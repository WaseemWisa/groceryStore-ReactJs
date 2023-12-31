import { Container, Title , createStyles, useMantineTheme} from '@mantine/core';
import Hero from './components/Hero';
import { Fragment } from 'react';
import FoodCategory from './components/FoodCategory';
import FeaturedProduct from './components/featuredProduct/FeaturedProduct';
import OurService from './components/ourService/OurService';




function Home() {

  return (
    <Fragment>
      <Hero/>
      <FoodCategory/>
      <FeaturedProduct/>
      <OurService/>
    </Fragment>
  )
}

export default Home