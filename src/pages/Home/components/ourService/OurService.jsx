import { useState } from 'react';
import { Container , createStyles , useMantineTheme} from '@mantine/core';

const useStyles = createStyles((theme) => ({}))
function OurService() {
const theme = useMantineTheme()
const { classes , cx } = useStyles(theme);
  return (
    <Container></Container>
  )
}

export default OurService