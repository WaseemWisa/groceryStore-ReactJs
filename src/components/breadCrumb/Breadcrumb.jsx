import { Link } from 'react-router-dom';
/* Icons */
import {HiHome} from 'react-icons/hi';
import {BiChevronRight} from 'react-icons/bi';
import {
  Box,
  Image,
  BackgroundImage,
  Text,
  createStyles,
  useMantineTheme,
  Container,
  List
} from '@mantine/core';
const useStyles = createStyles((theme) => ({
  breadcrumb: {
    width: '450px',
    maxWidth: '100%',
    margin: '2rem auto',
    textAlign: 'center'
  },
  title: {
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'uppercase',
    color: theme.colors.colorThird
  },
  desc: {
    fontSize: '2.125rem',
    fontWeight: '700',
    color: '#000',
    lineHeight: '1',
  }
}))

function Heading({title, desc}) {
  const theme = useMantineTheme()
  const { classes , cx } = useStyles(theme);
  return (
    <div className={classes.breadcrumb}>
      <Text component='span'  className={classes.title}>{title}</Text>
      <Text order={2} className={classes.desc}>{desc}</Text> 
    </div>
  )
}

export default Heading