import React from 'react';
import { Carousel } from '@mantine/carousel';
import {
  Box,
  Image,
  BackgroundImage,
  Text,
  createStyles,
  useMantineTheme
} from '@mantine/core';
import cover from '../../../../public/imgs/cover-1.jpg';
import './style.css'
const useStyles = createStyles((theme) => ({
  carousel: {
    position: 'relative',
  },
  '.mantine-Carousel-indicators': {
    [`@media (min-width: ${theme.breakpoints.xs})`]: {
      display: 'none !imporant',
    },
  },
  carouselHolder: {
    userSelect: 'none',
    '.mantine-Carousel-control': {
      backgroundColor: theme.colors.colorThird,
      borderRadius: '3px',
      width: '35px',
      height: '35px',
      [`@media (max-width: ${theme.breakpoints.xs})`]: {
        display: 'none'
      },
      ['.mantine-Carousel-indicator']: {
        backgroundColor: 'red'
      },
    }
  },
  textDiv: {
    position: 'absolute',
    top: '50%',
    left: '3rem',
    width: '400px',
    maxWidth: '100%',
    transform: 'translateY(-50%)',
    padding: '1rem',
    [`@media (max-width: ${theme.breakpoints.xs})`]: {
      left: '1rem',
    },

  },
  title: {
    fontSize: '60px',
    marginBottom: '15px',
    color:' #232323',
    marginTop: '0',
  },
  span: {
    fontWeight: '500',
    color: theme.colors.colorPrimary,
  },
})) 
function Hero() {
  const theme = useMantineTheme()
  const { classes , cx } = useStyles(theme);

  return (
    <Carousel maw={'100%'} mx="auto" height={'600px'} withIndicators loop dragFree={false} className={cx(classes.carouselHolder , 'hero-carousel')}>
      <Carousel.Slide className={classes.carousel}>
        <BackgroundImage src={cover} sx={{height: '100%'}}>
        <Box component='div' className={classes.textDiv}>
          <Text component="span" className={classes.span}>Fresh & Healthy Food - 2022</Text>
          <Text component="h2" order={2} className={classes.title}>Organic</Text>
          <Text component="p" sx={{color: '#7d7f83'}}>
            Organic food is grown without the use of synthetic  
            chemicals, such as human-made pesticides.
          </Text>
        </Box>
        </BackgroundImage>
      </Carousel.Slide>
      <Carousel.Slide className={classes.carousel}>
        <BackgroundImage src={cover} sx={{height: '100%'}}>
        <Box component='div' className={classes.textDiv}>
          <Text component="span" className={classes.span}>Fresh & Healthy Food - 2022</Text>
          <Text component="h2" order={2} className={classes.title}>Organic</Text>
          <Text component="p" sx={{color: '#7d7f83'}}>
            Organic food is grown without the use of synthetic  
            chemicals, such as human-made pesticides.
          </Text>
        </Box>
        </BackgroundImage>
      </Carousel.Slide>
      <Carousel.Slide className={classes.carousel}>
        <BackgroundImage src={cover} sx={{height: '100%'}}>
        <Box component='div' className={classes.textDiv}>
          <Text component="span" className={classes.span}>Fresh & Healthy Food - 2022</Text>
          <Text component="h2" order={2} className={classes.title}>Organic</Text>
          <Text component="p" sx={{color: '#7d7f83'}}>
            Organic food is grown without the use of synthetic  
            chemicals, such as human-made pesticides.
          </Text>
        </Box>
        </BackgroundImage>
      </Carousel.Slide>
    </Carousel>
  )
}

export default Hero