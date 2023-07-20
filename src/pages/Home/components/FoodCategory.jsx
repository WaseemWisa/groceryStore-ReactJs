import React, { useState } from 'react'
import { Container , Image , Box , Text ,   createStyles, useMantineTheme} from '@mantine/core'
import { Carousel } from '@mantine/carousel';
import Heading from '../../../components/breadCrumb/Breadcrumb';
import Data from './Data';

const useStyles = createStyles((theme) => ({
  slideHolder: {
    padding: '0 1rem',
  },
  imgHolder: {
    border: '1px solid rgba(0,0,0,10%)',
    padding: '40px',
  },
  title: {
    textAlign: 'center',
    paddingTop: '0.5rem',
    fontWeight: '500'
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
}))
function FoodCategory() {
  const theme = useMantineTheme()
  const { classes , cx } = useStyles(theme);
  const [data, setData] = useState(Data)
  const breakpointsizes = [
    { maxWidth: "md", slideSize: "50%"},
    { maxWidth: "lg", slideSize: "50%"},
    { maxWidth: "sm", slideSize: "100%"},
  ]
  return (
    <div>
      <Container size={'lg'} sx={{padding: '2rem 0'}} className={classes.carouselHolder}>
        <Heading title={"ORGANIC FOOD"} desc={'Food category'}/>
        <Carousel slideSize="16.666%" 
          /* breakpoints={breakpointsizes}  */
          height={'200px'} 
          withControls={true}
          loop
        >
          {
            data.map((item , i) => {
              return (
                <Carousel.Slide className={classes.slide} key={i} >
                  <Box component={"div"} className={classes.slideHolder}>
                    <div  className={classes.imgHolder}>
                      <Image src={item.icon} maw={'40px'} mx="auto" className={classes.img}/>
                    </div>
                    <Text order={4} className={classes.title}>{item.title}</Text>
                  </Box>
                </Carousel.Slide>
              )
            })
          }
        </Carousel>
      </Container>
    </div>
  )
}

export default FoodCategory