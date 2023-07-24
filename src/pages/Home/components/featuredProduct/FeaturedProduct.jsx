import { useState , useEffect} from 'react';
import { Container , 
  Box, 
  Text,
  createStyles , 
  useMantineTheme, 
  Image, 
  Rating,
  Stack,
  Group ,
  getStylesRef 
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Data from './Data';
import Heading from '../../../../components/breadCrumb/Breadcrumb';
import {BiSearch} from 'react-icons/bi';
const useStyles = createStyles((theme) => ({
  bg: {
    backgroundColor: '#faf5f1'
  },
  slideHolder: {
    backgroundColor: '#0000',
  },
  slideWrapper: {
    padding: '0 1.5rem',
    [`@media (max-width: ${theme.breakpoints.md})`]: {
      padding: '0 0.5rem',
    },
  },
  imgHolder: {
    position: 'relative',
    overflow: 'hidden',
      [`&:hover .mantine-Group-root`]: {
        bottom: '1rem !important',
      },

  },
  icons: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: '-5rem',
    zIndex: '9999999999',
    transition: '0.3s'
  },
  icon: {
    backgroundColor: theme.colors.colorPrimary,
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    cursor: 'pointer'
  },
  desc: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '1rem',
    gap: '0.5rem'
  },
  title: {
    fontWeight: '500'
  },
  price: {
    color: theme.colors.colorPrimary,
    fontWeight: '600',
    fontSize: '1.5rem'
  }
}))

function FeaturedProduct() {
  const theme = useMantineTheme()
  const { classes , cx } = useStyles(theme);
  const [data, setData] = useState(Data)
  useEffect(() => {
    setData(Data)
  }, [Data])
  
  const breakpointsizes = [
    { maxWidth: "md", slideSize: "50%"},
  ]
  return (
    <div className={classes.bg}>
      <Container size={'lg'} sx={{padding: '2rem 0'}} className={classes.carouselHolder}>
        <Heading title={"BEST ONLINE STORE"} desc={'Featured product'}/>
        <Carousel
            breakpoints={breakpointsizes}
            height={'auto'} 
            withControls={true}
            loop
            slideSize={'25%'}
        >
          {
            data.map((item  , i) => {
              return (
                <Carousel.Slide key={i} className={classes.slideHolder}>
                  <Box component='div' className={classes.slideWrapper}>
                    <Group className={classes.imgHolder}>
                      <Image src={item.img} maw={'100%'} mx="auto"/>
                      <Group className={classes.icons}>
                        <Text component="span" className={classes.icon}><BiSearch size={'1.2rem'} width={'100%'} height={'100%'}/></Text>
                        <Text component="span" className={classes.icon}><BiSearch size={'1.2rem'} width={'100%'} height={'100%'}/></Text>
                        <Text component="span" className={classes.icon}><BiSearch size={'1.2rem'} width={'100%'} height={'100%'}/></Text>
                      </Group>
                    </Group>
                    <Stack className={classes.desc}>
                      <Text component="span" className={classes.title}>{item.title}</Text>
                      <Text component="span" className={classes.price}>{item.price}$</Text>
                      <Rating  defaultValue={5} value={item.value}  readOnly={true}/>
                    </Stack>
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

export default FeaturedProduct