import { Container, Title , createStyles, useMantineTheme} from '@mantine/core';
import Hero from './components/Hero';
import { Fragment } from 'react';
import FoodCategory from './components/FoodCategory';




function Home() {

  return (
    <Fragment>
      <Hero/>
      <FoodCategory/>
    </Fragment>
  )
}

export default Home