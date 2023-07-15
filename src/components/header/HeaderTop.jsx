import { Fragment } from 'react';
import { 
  Box,
  Image , 
  Text , 
  Input , 
  Indicator ,
  Group,
  createStyles,
  useMantineTheme
} from '@mantine/core';
import './styleTop.css'
import Logo from '../../../public/imgs/logo.svg';
import {GrSearch} from 'react-icons/gr';
import {CgProfile} from 'react-icons/cg';
import {BiSearch} from 'react-icons/bi';
import {HiOutlineMenuAlt3} from 'react-icons/hi';
import {AiOutlineHeart , AiOutlineShopping} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  headerTop:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputSearch: {
    [`@media (max-width: ${theme.breakpoints.xs})`]: {
      display: 'none'
    },
  },
  icon: {
    fontSize: '1.3rem',
    marginRight: '0.3rem',
    cursor: 'pointer'
  },
  mobIcon: {
    [`@media (min-width: ${theme.breakpoints.xs})`]: {
      display: 'none'
    },
  },
  indicator: {
    userSelect: 'none',
  }
}))


function HeaderTop() {
  const theme = useMantineTheme()
  const { classes , cx } = useStyles(theme);
  return (
    <Box component='div' className={classes.headerTop}>
      <Link to={'/'}>
        <Image maw={'100px'} src={Logo} alt="Logo image" />
      </Link>
      <Input  placeholder="Search" rightSection={<GrSearch/>} radius="xs" className={classes.inputSearch}/>
      <Group>
        <Text component="span"  className={classes.icon}><CgProfile/></Text>
        <Indicator label="0" color={theme.colors.colorPrimary} size={16} className={classes.indicator}>
          <Text component="span"  className={classes.icon}><AiOutlineHeart/></Text>
        </Indicator>
        <Indicator label="0" color={theme.colors.colorPrimary} size={16} className={classes.indicator}>
          <Text component="span"  className={classes.icon}><AiOutlineShopping/></Text>
        </Indicator>
        <Text component="span" className={cx(classes.icon , classes.mobIcon)}><BiSearch/></Text>
        <Text component="span" className={cx(classes.icon , classes.mobIcon)}><HiOutlineMenuAlt3/></Text>
      </Group>
    </Box>
  )
}

export default HeaderTop