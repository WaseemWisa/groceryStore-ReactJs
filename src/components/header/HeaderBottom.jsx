import React from 'react'
import { Menu, Button, List , Text ,Image ,createStyles, useMantineTheme} from '@mantine/core';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import img from '../../../public/imgs/fruitIcon-1.jpg'
const useStyles = createStyles((theme) => ({
  HeaderBottom: {
    borderTop: '1px solid #ddd',
    paddingTop: '10px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    [`@media (max-width: ${theme.breakpoints.xs})`]: {
      display: 'none'
    },
  },
  button: {
    backgroundColor: theme.colors.colorPrimary,
    width: '200px',
    height: '45px',
    ['&:hover']: {
      backgroundColor: theme.colors.colorPrimary,
    },
    '.mantine-Button-label': {
      justifyContent: 'space-between',
      width: '100%'
    },

  },
  list: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  listItem: {
    cursor: 'pointer',
    fontWeight: '500',
    color: '#7d7f83',
    ['& span:first-of-type']: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  icon: {
    display: 'flex',
    
  },
  iconNav: {
    fontSize: '0.1rem',
  },
  menuItem: {

    '.mantine-Menu-itemLabel':{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }
}))
function HeaderBottom() {
  const theme = useMantineTheme()
  const { classes , cx } = useStyles(theme);
  return (
    <div className={classes.HeaderBottom}>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button className={classes.button} radius={'0px'}>
            <Text>Browse Categories</Text>
            <Text className={classes.icon}><KeyboardArrowDownIcon/></Text>
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item className={classes.menuItem}>
            <Image maw={'20px'} src={img} alt="Logo image" />
            Messages
          </Menu.Item>
          <Menu.Item className={classes.menuItem}>
            <Image maw={'20px'} src={img} alt="Logo image" />
            Messages
          </Menu.Item>          
          <Menu.Item className={classes.menuItem}>
            <Image maw={'20px'} src={img} alt="Logo image" />
            Messages
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <List className={classes.list}>
        <List.Item className={classes.listItem}>Home<KeyboardArrowDownIcon className={classes.iconNav}/></List.Item>
        <List.Item className={classes.listItem}>Shop<KeyboardArrowDownIcon className={classes.iconNav}/></List.Item>
        <List.Item className={classes.listItem}>Collection<KeyboardArrowDownIcon className={classes.iconNav}/></List.Item>
        <List.Item className={classes.listItem}>Blogs<KeyboardArrowDownIcon className={classes.iconNav}/></List.Item>
        <List.Item className={classes.listItem}>Pages<KeyboardArrowDownIcon className={classes.iconNav}/></List.Item>
      </List>
      <Text sx={{color: '#7d7f83'}}>(+14) 054 212 31</Text>
    </div>
  )
}

export default HeaderBottom