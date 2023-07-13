import { Fragment } from 'react';
import { 
  Container , 
  Image , 
  Input , 
  Indicator ,
  Group,
  createStyles,
  useMantineTheme
} from '@mantine/core'
import Logo from '../../../public/imgs/logo.svg'
import {GrSearch} from 'react-icons/gr';
import {CgProfile} from 'react-icons/cg';
import {AiOutlineHeart , AiOutlineShopping} from 'react-icons/ai';

const useStyles = createStyles((theme) => ({
  icon: {
    fontSize: '1.3rem'
  },
  indicator: {
    userSelect: 'none'
  }
}))


function HeaderTop() {
  const theme = useMantineTheme()
  const { classes } = useStyles(theme);
  return (
    <Fragment>
      <Image maw={'100px'} src={Logo} alt="Logo image" />
      <Input  placeholder="Search" rightSection={<GrSearch/>}/>
      <Group>
        <Indicator label="0" color={theme.colors.colorPrimary} size={16} className={classes.indicator}>
          <AiOutlineHeart className={classes.icon}/>
        </Indicator>
        <Indicator label="0" color={theme.colors.colorPrimary} size={16} className={classes.indicator}>
          <CgProfile className={classes.icon}/>
        </Indicator>
        <Indicator label="0" color={theme.colors.colorPrimary} size={16} className={classes.indicator}>
          <AiOutlineShopping className={classes.icon}/>
        </Indicator>
      </Group>
    </Fragment>
  )
}

export default HeaderTop