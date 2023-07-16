import { Fragment } from 'react';
import { 
  Box,
  Image , 
  Text , 
  Input , 
  Indicator ,
  Group,
  List,
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
import { useDisclosure } from '@mantine/hooks';
import HeaderDrawer from './HeaderDrawer';


import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
const useStyles = createStyles((theme) => ({
  headerTop:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  list:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '1rem',
    
  },
  listItem:{

    cursor: 'pointer',
    marginRight: '0.6rem',

    ['& span:first-of-type']: {
      display: 'flex',
      alignItems: 'center',
/*       fontSize: '1.3rem',
      fontWeight: '500', */
    },
  },
  inputSearch: {
    '.mantine-Input-input': {
      width: '280px',
      height: '45px',
      ['&:focus']: {
        borderColor: theme.colors.colorThird
      }
    },
    [`@media (max-width: ${theme.breakpoints.xs})`]: {
      display: 'none'
    },
  },
  icon: {
    marginRight: '0.3rem',
    cursor: 'pointer',
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
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Fragment>
      <Box component='div' className={classes.headerTop}>
        <Link to={'/'}>
          <Image maw={'70px'} src={Logo} alt="Logo image" />
        </Link>

        <Input  placeholder="Search" rightSection={<SearchOutlinedIcon/>} radius="xs" className={classes.inputSearch}/>
        
        <List className={classes.list}>
          <List.Item className={classes.listItem}>
            <Text component='span'><PermIdentityOutlinedIcon className={classes.icon}/></Text>
            <Text component='span'>Account</Text>
          </List.Item>

          <List.Item className={classes.listItem}>
            <Indicator inline size={14} offset={7}  color="red" withBorder>
              <FavoriteBorderOutlinedIcon className={classes.icon}/>
            </Indicator>
            <Text component='span'>Account</Text>
          </List.Item>

          <List.Item className={classes.listItem}>
            <Indicator inline size={14} offset={7}  color="green" withBorder>
              <ShoppingBagOutlinedIcon  className={classes.icon}/>
            </Indicator>
            <Text component='span'>Cart</Text>
          </List.Item>

          <List.Item className={cx(classes.listItem, classes.mobIcon)} onClick={open}>
            <MenuOutlinedIcon/>
          </List.Item>
        </List>
      </Box>
      <HeaderDrawer opened={opened} close={close}/>
    </Fragment>
  )
}

export default HeaderTop