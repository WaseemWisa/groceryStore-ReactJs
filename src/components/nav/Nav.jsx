import { useRef } from 'react';
import { 
  Box , 
  Container, 
  List ,
  Text ,
  createStyles,
  useMantineTheme
} from '@mantine/core'
import { Carousel } from '@mantine/carousel';
import { MdFacebook } from 'react-icons/md';
import { BsArrowRightShort , BsArrowLeftShort } from 'react-icons/bs';
import { AiFillInstagram , AiOutlineTwitter , AiFillYoutube } from 'react-icons/ai';
import { BiLogoPinterest} from 'react-icons/bi';
import './style.css'

const useStyles = createStyles((theme) => ({
  container:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '0.5rem',
    cursor: 'pointer',
  },
  list:{
    display: 'flex',
    flexDirection: 'row',
    gap: '0.5rem',
    cursor: 'pointer',
    flex: 1,
    [`@media (max-width: ${theme.breakpoints.xs})`]: {
      display: 'none'
    },
  },

  li:{
    color: theme.colors.colorBodyBg,
    transition: '0.3s',
    '&:hover': {
      color: theme.colors.colorPrimary
    }
  },
  text:{
    flex: 1,
    textAlign: 'end',
    transition: '0.3s',
    color: theme.colors.colorBodyBg,
    '&:hover': {
      color: theme.colors.colorPrimary,
      textDecoration: 'underline'
    },
    [`@media (max-width: ${theme.breakpoints.xs})`]: {
      display: 'none'
    },
  },
  carousel:{
    flex: 3
  },
  slide:{
    textAlign: 'center',
    color: theme.colors.colorBodyBg,
  },
}))



function Nav() {
  const theme = useMantineTheme()
  const { classes } = useStyles(theme);
  return (
    <Box component='nav' bg={theme.colors.colorThird} sx={{
      padding: '0.5rem 0'
    }}>
      <Container size={'lg'} className={classes.container}>
        <List className={classes.list}>
          <List.Item className={classes.li}><MdFacebook/></List.Item>
          <List.Item className={classes.li}><AiFillInstagram/></List.Item>
          <List.Item className={classes.li}><AiOutlineTwitter/></List.Item>
          <List.Item className={classes.li}><BiLogoPinterest/></List.Item>
          <List.Item className={classes.li}><AiFillYoutube/></List.Item>
        </List>
        <Carousel
          slideSize="100%"
          height={'100%'}
          align="start"
          className={classes.carousel}
          loop
        >
          <Carousel.Slide className={classes.slide}>Slide 1</Carousel.Slide>
          <Carousel.Slide className={classes.slide}>Slide 2</Carousel.Slide>
          <Carousel.Slide className={classes.slide}>Slide 3</Carousel.Slide>
        </Carousel>
        <Text fz="md" component="span" className={classes.text}>support@demo.com</Text>
      </Container>
    </Box>
  )
}

export default Nav